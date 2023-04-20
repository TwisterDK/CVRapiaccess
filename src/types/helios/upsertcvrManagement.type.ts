export type UpsertCVRManagement = {
  CVR: number;
  UpdateTime: Date;
  ParticipantType: string;
  ParticipantName: string;
  Maintype: string;
  Subtype: string;
  Street: string;
  City?: string;
  PostalCode: number;
  PostalDistrict: string;
  CountryCode: string;
  ElectionForm?: string;
  ValidFrom: Date;
  ValidTo?: Date;
};
