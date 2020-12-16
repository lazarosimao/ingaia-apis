export interface ISquareMeterRepository {
  getValue(): Promise<number>;
}