export type HeliosResponse<T> = {
  message: string;
  valueCount: number;
  data: { value: T[] };
};
