export type CVRItem = {
  CVR: number;
  JSON: string;
  Timestamp: string;
};

// JSON.parse(item.JSON, CVRcompany);

export type CVRcompany = {
  CVR: number;
};
export interface CVRItemEnriched extends CVRItem {
  DataItem: CVRcompany;
}

// .dataitem.CVR

export interface CVRcompanyItem extends CVRcompany {
  prop: string;
  isValid: boolean;
}
