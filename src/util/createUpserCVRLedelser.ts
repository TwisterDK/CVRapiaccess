/* eslint-disable no-underscore-dangle */

import { cvrData } from '../types/cvr/cvrData.type';
import { UpsertCVRledelser } from '../types/helios/upsertcvrledelser.type';
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

export const createUpsertCVRLedelser = (cvr: number, data: cvrData): UpsertCVRledelser[] => {
  const heliosLedelseItems: UpsertCVRledelser[] = getDeltagerRelations(cvr, data)
    .filter((item) => item.deltager !== null)
    .map((relation) => {
      const item: UpsertCVRledelser = {
        CVR: cvr,
        Timestamp: new Date(),
        DeltagerType: relation.deltager.enhedstype,
        DeltagerNavn: getLatestName(relation.deltager),
        Hovedtype: getOrganisationer(relation, 'LEDELSESORGAN')?.hovedtype,
        Undertype: getLatestAttribute(getOrganisationer(relation, 'LEDELSESORGAN')?.medlemsData[0].attributter, 'FUNKTION')?.vaerdi,
        Vejnavn: getLatestAddress(relation.deltager.beliggenhedsadresse)?.vejnavn || null,
        Bynavn: getLatestAddress(relation.deltager.beliggenhedsadresse)?.bynavn || null,
        Postnummer: getLatestAddress(relation.deltager.beliggenhedsadresse)?.postnummer || null,
        Postdistrikt: getLatestAddress(relation.deltager.beliggenhedsadresse)?.postdistrikt || null,
        Landekode: getLatestAddress(relation.deltager.beliggenhedsadresse)?.landekode || null,
        Valgform: getLatestAttribute(getOrganisationer(relation, 'LEDELSESORGAN')?.medlemsData[0].attributter, 'VALGFORM')?.vaerdi || null,
        GyldigFra: getLatestAttribute(getOrganisationer(relation, 'LEDELSESORGAN')?.medlemsData[0].attributter, 'VALGFORM')?.periode.gyldigFra || null,
        GyldigTil: getLatestAttribute(getOrganisationer(relation, 'LEDELSESORGAN')?.medlemsData[0].attributter, 'VALGFORM')?.periode.gyldigTil || null,
      };

      return item;
    });

  // TODO ensure that double roles both are saved, e.g. director and boardmember for same person cvr 25612876

  // console.log(heliosLedelseItems);
  return heliosLedelseItems.filter((hovedtype) => hovedtype.Hovedtype !== undefined && hovedtype.Undertype !== undefined);
};

export default createUpsertCVRLedelser;
