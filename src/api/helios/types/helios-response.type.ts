export type HeliosResponse<T> = {
  message: string;
  valueCount: number;
  value: T;
};
