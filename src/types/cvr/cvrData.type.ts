import { Hits } from './Hits.type';
import { Shards } from './Shards.type';

// CVR documentation here http://distribution.virk.dk/cvr-permanent/_mapping

export type cvrData = {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
};
