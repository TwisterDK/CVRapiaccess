import { Hit } from './Hit.type';

export type Hits = {
  total: number;
  max_score: number;
  hits: Hit[];
};
