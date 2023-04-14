import { Beliggenhedsadresse } from './Beliggenhedsadresse.type';
import { Navne } from './Navne.type';
import { Postadresse } from './Postadresse.type';

export type Deltager = {
  enhedsNummer: number;
  enhedstype: string;
  forretningsnoegle?: number;
  organisationstype?: string;
  sidstIndlaest: string;
  sidstOpdateret: string;
  navne: Navne[];
  adresseHemmelig?: boolean;
  adresseHemmeligUndtagelse?: boolean;
  adresseOpdateringOphoert?: boolean;
  beliggenhedsadresse: Beliggenhedsadresse[];
  postadresse: Postadresse[];
};
