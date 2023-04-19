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
        Timestamp: new Date(),
        Navn: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteNavn.navn,
        Vejnavn: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.vejnavn,
        HusnummerFra: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.husnummerFra,
        HusnummerTil: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.husnummerTil,
        Etage: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.etage,
        Sidedoer: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.sidedoer,
        COnavn: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.conavn,
        Postnummer: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.postnummer,
        Postdistrikt: hit._source.Vrvirksomhed.virksomhedMetadata.nyesteBeliggenhedsadresse.postdistrikt,
        KapitalBeloeb: Number(getLatestAttribute(hit._source.Vrvirksomhed.attributter, 'KAPITAL')?.vaerdi) || null,
        KapitalValuta: getLatestAttribute(hit._source.Vrvirksomhed.attributter, 'KAPITALVALUTA')?.vaerdi || null,
        Tegningsregel: getLatestAttribute(hit._source.Vrvirksomhed.attributter, 'TEGNINGSREGEL')?.vaerdi || null,
        Vedtaegtsdato: new Date(getLatestAttribute(hit._source.Vrvirksomhed.attributter, 'VEDTÆGT_SENESTE')?.vaerdi) || null,
      };
      return item;
    });
  return heliosItems;
};

export default createUpsertCVRItem;
