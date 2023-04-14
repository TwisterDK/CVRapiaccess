import { Periode } from './Periode.type';

export type Kommune = {
  kommuneKode: number;
  kommuneNavn: string;
  periode: Periode;
  sidstOpdateret: string;
};
