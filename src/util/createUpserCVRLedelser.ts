/* eslint-disable no-underscore-dangle */

import { cvrData } from '../types/cvr/cvrData.type';
import { UpsertCVRManagement } from '../types/helios/upsertcvrManagement.type';
import { DeltagerRelation } from '../types/cvr/DeltagerRelation.type';
import { getLatestName, getLatestAddress, getLatestAttribute } from './getLatest.functions';
import { Organisationer } from '../types/cvr/Organisationer.type';

const getDeltagerRelations = (cvr: number, data: cvrData): DeltagerRelation[] => {
  let relationer: DeltagerRelation[] = [];
  data.hits.hits
    .filter((item) => item._source.Vrvirksomhed.cvrNummer === cvr)
    .forEach((hit) => {
      const deltagerRelation = hit._source.Vrvirksomhed.deltagerRelation.map((dr) => dr);
      relationer = relationer.concat(deltagerRelation);
    });

  return relationer;
};

const getOrganisationer = (deltagerrelation: DeltagerRelation, hovedtype: string): Organisationer => {
  let org: Organisationer | null;

  if (deltagerrelation) {
    const organisation = deltagerrelation.organisationer.find((item) => item.hovedtype === hovedtype);
    if (organisation) {
      org = organisation;
    }
  }

  return org;
};

export const createUpsertCVRLedelser = (cvr: number, data: cvrData): UpsertCVRManagement[] => {
  const heliosLedelseItems: UpsertCVRManagement[] = [];
  getDeltagerRelations(cvr, data)
    .filter((item) => item.deltager !== null)
    .forEach((relation) => {
      relation.organisationer
        .filter((org) => org.hovedtype === 'LEDELSESORGAN')
        .forEach((org) => {
          const item: UpsertCVRManagement = {
            CVR: cvr,
            UpdateTime: new Date(),
            ParticipantType: relation.deltager.enhedstype,
            ParticipantName: getLatestName(relation.deltager),
            Maintype: getOrganisationer(relation, 'LEDELSESORGAN')?.hovedtype,
            Subtype: getLatestAttribute(org.medlemsData[0].attributter, 'FUNKTION')?.vaerdi,
            Street: getLatestAddress(relation.deltager.beliggenhedsadresse)?.vejnavn || null,
            City: getLatestAddress(relation.deltager.beliggenhedsadresse)?.bynavn || null,
            PostalCode: getLatestAddress(relation.deltager.beliggenhedsadresse)?.postnummer || null,
            PostalDistrict: getLatestAddress(relation.deltager.beliggenhedsadresse)?.postdistrikt || null,
            CountryCode: getLatestAddress(relation.deltager.beliggenhedsadresse)?.landekode || null,
            ElectionForm: getLatestAttribute(org.medlemsData[0].attributter, 'VALGFORM')?.vaerdi || null,
            ValidFrom: getLatestAttribute(org.medlemsData[0].attributter, 'VALGFORM')?.periode.gyldigFra || null,
            ValidTo: getLatestAttribute(org.medlemsData[0].attributter, 'VALGFORM')?.periode.gyldigTil || null,
          };
          heliosLedelseItems.push(item);
        });
    });

  return heliosLedelseItems.filter((item) => item.Subtype !== undefined);
};

export default createUpsertCVRLedelser;
