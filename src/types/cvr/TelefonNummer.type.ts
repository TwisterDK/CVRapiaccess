import { Periode } from './Periode.type';

export type TelefonNummer = {
  kontaktoplysning: string;
  hemmelig: boolean;
  periode: Periode;
  sidstOpdateret: string;
};
