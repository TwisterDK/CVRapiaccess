export type UpsertCVRledelser = {
  CVR: number;
  Timestamp: Date;
  DeltagerType: string;
  DeltagerNavn: string;
  Hovedtype: string;
  Undertype: string;
  Vejnavn: string;
  Bynavn?: string;
  Postnummer: number;
  Postdistrikt: string;
  Landekode: string;
  Valgform?: string;
  GyldigFra: Date;
  GyldigTil?: Date;
};
