/* eslint-disable no-underscore-dangle */

import { cvrData } from '../types/cvr/cvrData.type';
import { UpsertCVRItem } from '../types/helios/upsertcvrItem.type';
import { getLatestAttribute } from './getLatest.functions';

export const createUpsertCVRItem = (cvr: number, data: cvrData): UpsertCVRItem[] => {
  const heliosItems: UpsertCVRItem[] = data.hits.hits
    .filter((item) => item._source.Vrvirksomhed.cvrNummer === cvr)
    .map((hit) => {
      const item: UpsertCVRItem = {
        CVR: hit._source.Vrvirksomhed.cvrNummer,
        JSON: JSON.stringify(data),
        UpdateTime: new Date(),
        CompanyName: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteNavn.navn,
        Street: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.vejnavn,
        StreetNumberFrom: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.husnummerFra,
        StreetNumberTo: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.husnummerTil,
        Floor: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.etage,
        SideDoor: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.sidedoer,
        COname: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.conavn,
        PostalCode: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.postnummer,
        PostalDistrict: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.postdistrikt,
        ShareCapitalAmount: Number(getLatestAttribute(hit._source.Vrvirksomhed.attributter, 'KAPITAL')?.vaerdi) || null,
        ShareCapitalCurrency: getLatestAttribute(hit._source.Vrvirksomhed.attributter, 'KAPITALVALUTA')?.vaerdi || null,
        PowerToBind: getLatestAttribute(hit._source.Vrvirksomhed.attributter, 'TEGNINGSREGEL')?.vaerdi || null,
        ArticlesOfAssociationDate: new Date(getLatestAttribute(hit._source.Vrvirksomhed.attributter, 'VEDTÆGT_SENESTE')?.vaerdi) || null,
      };
      return item;
    });
  return heliosItems;
};

export default createUpsertCVRItem;
