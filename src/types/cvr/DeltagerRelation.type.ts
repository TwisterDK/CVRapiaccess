import { Deltager } from './Deltager.type';
import { Kontorsteder } from './Kontorsteder.type';
import { Organisationer } from './Organisationer.type';

export type DeltagerRelation = {
  deltager: Deltager;
  kontorsteder: Kontorsteder[];
  organisationer: Organisationer[];
};
