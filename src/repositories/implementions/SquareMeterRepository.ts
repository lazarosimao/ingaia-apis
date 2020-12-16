import Connection from "@src/usefulness/Connection";
import { Collection } from "mongodb";
import { ISquareMeterRepository } from "../interfaces/ISquareMeterRepository";

export class SquareMeterRepository implements ISquareMeterRepository {
  private collectionApiDb: Collection;

  async getValue(): Promise<number> {
    this.collectionApiDb = Connection.getCollection(`${process.env.MONGO_COLLECTION}`);
    const result = await this.collectionApiDb.findOne({})
    return result.value_m2;
  }
}