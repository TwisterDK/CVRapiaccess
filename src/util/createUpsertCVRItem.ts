/* eslint-disable no-underscore-dangle */

import { cvrData } from '../types/cvr/cvrData.type';
import { UpsertCVRItem } from '../types/helios/upsertcvrItem.type';
import { Attributter } from '../types/cvr/Attributter.type';

export const getLatestAttributeValue = (attributes: Attributter[], type: 'KAPITAL' | 'KAPITALVALUTA' | 'TEGNINGSREGEL' | 'VEDTÆGT_SENESTE'): string | null => {
  let latest: string | null;

  const Att = attributes.find((item) => item.type === type);
  if (Att) {
    const latestPeriod = Att.vaerdier.find((obj) => obj.periode.gyldigTil === null);
    if (latestPeriod) {
      latest = latestPeriod.vaerdi;
    }
  }
  return latest;
};

export const createUpsertCVRItem = (cvr: number, data: cvrData): UpsertCVRItem[] => {
  const heliosItems: UpsertCVRItem[] = data.hits.hits
    .filter((item) => item._source.Vrvirksomhed.cvrNummer === cvr)
    .map((hit) => {
      // TODO get addrss
      // const latestAddress = getLatestAddress(hit._source.Vrvirksomhed.beliggenhedsadresse);

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
        KapitalBeloeb: Number(getLatestAttributeValue(hit._source.Vrvirksomhed.attributter, 'KAPITAL')),
        KapitalValuta: getLatestAttributeValue(hit._source.Vrvirksomhed.attributter, 'KAPITALVALUTA'),
        Tegningsregel: getLatestAttributeValue(hit._source.Vrvirksomhed.attributter, 'TEGNINGSREGEL'),
        Vedtaegtsdato: new Date(getLatestAttributeValue(hit._source.Vrvirksomhed.attributter, 'VEDTÆGT_SENESTE')),
      };
      return item;
    });
  return heliosItems;
};

// MOVE TO SERVICE FIL
// export const getLatestAddress = (addresses: Beliggenhedsadresse[]): Beliggenhedsadresse => {
//   const last = addresses.reduce((prev, curr) => (prev.periode.gyldigTil < curr.periode.gyldigTil ? curr : prev));
//   const last2 = addresses.find((item) => item.periode.gyldigTil === undefined);
//   const last3 = addresses.find((item) => item.periode.gyldigTil === null);

//   return last;
// };

export default createUpsertCVRItem;
