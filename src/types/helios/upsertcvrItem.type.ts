export type UpsertCVRItem = {
  CVR: number;
  JSON: string;
  UpdateTime: Date;
  CompanyName?: string;
  Street?: string;
  StreetNumberFrom?: number;
  StreetNumberTo?: number;
  Floor?: string;
  SideDoor?: string;
  COname?: string;
  PostalCode?: number;
  PostalDistrict?: string;
  ShareCapitalAmount?: number;
  ShareCapitalCurrency?: string;
  PowerToBind?: string;
  ArticlesOfAssociationDate?: Date;
};
