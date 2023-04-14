import { Source } from './Source.type';

export type Hit = {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: Source;
};
