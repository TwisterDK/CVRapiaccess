import { Beliggenhedsadresse } from './Beliggenhedsadresse.type';
import { Navne } from './Navne.type';
import { Postadresse } from './Postadresse.type';

export type Penhed = {
  enhedsNummer: number;
  enhedstype: string;
  forretningsnoegle: number;
  organisationstype?: string;
  sidstIndlaest: Date;
  sidstOpdateret?: Date;
  navne: Navne[];
  adresseHemmelig?: boolean;
  adresseHemmeligUndtagelse?: boolean;
  adresseOpdateringOphoert?: boolean;
  beliggenhedsadresse: Beliggenhedsadresse[];
  postadresse?: Postadresse[];
};
