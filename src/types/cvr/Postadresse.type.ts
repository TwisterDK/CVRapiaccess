import { Kommune } from './Kommune.type';
import { Periode } from './Periode.type';

export type Postadresse = {
  landekode: string;
  fritekst?: string;
  vejkode: number;
  kommune: Kommune;
  husnummerFra: number;
  adresseId?: string;
  sidstValideret?: Date;
  husnummerTil?: number;
  bogstavFra?: string;
  bogstavTil?: string;
  etage: string;
  sidedoer?: string;
  conavn: string;
  postboks?: string;
  vejnavn: string;
  bynavn?: string;
  postnummer: number;
  postdistrikt: string;
  periode: Periode;
  sidstOpdateret: string;
};
