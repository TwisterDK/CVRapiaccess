export type UpsertCVRItem = {
  CVR: number;
  JSON: string;
  Timestamp: Date;
  Navn?: string;
  Vejnavn?: string;
  HusnummerFra?: number;
  HusnummerTil?: number;
  Etage?: string;
  Sidedoer?: string;
  COnavn?: string;
  Postnummer?: number;
  Postdistrikt?: string;
  KapitalBeloeb?: number;
  KapitalValuta?: string;
  Tegningsregel?: string;
  Vedtaegtsdato?: Date;
};
