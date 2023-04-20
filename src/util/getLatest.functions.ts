import { Attributter } from '../types/cvr/Attributter.type';
import { Deltager } from '../types/cvr/Deltager.type';
import { Beliggenhedsadresse } from '../types/cvr/Beliggenhedsadresse.type';
import { Vaerdier } from '../types/cvr/Vaerdier.type';

export const getLatestAttribute = (attributes: Attributter[], type: 'KAPITAL' | 'KAPITALVALUTA' | 'TEGNINGSREGEL' | 'VEDTÆGT_SENESTE' | 'FUNKTION' | 'VALGFORM'): Vaerdier | null => {
  let latest: Vaerdier | null;

  if (attributes && attributes.length) {
    const Att = attributes.find((item) => item.type === type);

    if (Att) {
      const latestPeriod = Att.vaerdier.find((obj) => obj.periode.gyldigTil === null);
      if (latestPeriod) {
        latest = {
          vaerdi: latestPeriod.vaerdi,
          periode: latestPeriod.periode,
          sidstOpdateret: latestPeriod.sidstOpdateret,
        };
      }
    }
  }
  return latest;
};

export const getLatestName = (deltager: Deltager): string | null => {
  let latest: string | null;

  if (deltager) {
    const latestPeriod = deltager.navne.find((obj) => obj.periode.gyldigTil === null);
    if (latestPeriod) {
      latest = latestPeriod.navn;
    }
  }
  return latest;
};

export const getLatestAddress = (addresses: Beliggenhedsadresse[]): Beliggenhedsadresse | null => {
  let latest: Beliggenhedsadresse | null;
  if (addresses && addresses.length) {
    const latestobj = addresses.reduce((prev, curr) => (new Date(prev.periode[0]) > new Date(curr.periode[0]) ? prev : curr));
    if (latestobj) {
      latest = latestobj;
    }
  }
  return latest;
};
