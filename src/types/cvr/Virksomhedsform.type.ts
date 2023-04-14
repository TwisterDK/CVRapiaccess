import { Periode } from './Periode.type';

export type Virksomhedsform = {
  virksomhedsformkode: number;
  kortBeskrivelse: string;
  langBeskrivelse: string;
  ansvarligDataleverandoer: string;
  periode: Periode;
  sidstOpdateret: string;
};
