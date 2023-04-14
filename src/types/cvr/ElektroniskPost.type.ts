import { Periode } from './Periode.type';

export type ElektroniskPost = {
  kontaktoplysning: string;
  hemmelig: boolean;
  periode: Periode;
  sidstOpdateret: string;
};
