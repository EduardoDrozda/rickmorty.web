export interface IRequestDataAccess<T> {
  info: IRequestDataAccessInfo;
  results: T[];
}

interface IRequestDataAccessInfo {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
