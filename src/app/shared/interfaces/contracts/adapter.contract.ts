export interface IAdapter<T, U> {
  adapt(item: T): U;
}
