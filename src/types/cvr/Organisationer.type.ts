import { Attributter } from './Attributter.type';
import { MedlemsData } from './MedlemsData.type';
import { OrganisationsNavn } from './OrganisationsNavn.type';

export type Organisationer = {
  enhedsNummerOrganisation: number;
  hovedtype: string;
  organisationsNavn: OrganisationsNavn[];
  attributter: Attributter[];
  medlemsData: MedlemsData[];
};
