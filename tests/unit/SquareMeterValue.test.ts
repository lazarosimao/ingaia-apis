import '@src/config/env';
import { SquareMeterRepository } from "@src/repositories/implementions/SquareMeterRepository";
import Connection from "@src/usefulness/Connection";

describe('Test Unit', () => {

  beforeAll(async () => {
    await Connection.initConnection(`mongodb://127.0.0.1:27017/ingaia_db`);
    await Connection.getConnection().db().createCollection("test_api");
    const mock = { value_m2: 234 };
    await Connection.getCollection(`test_api`).insertOne(mock);
  });

  afterAll(async () => {
    await Connection.getConnection().db().dropCollection('test_api');
    await Connection.disconnect();
  });

  describe('Repository', () => { 
    it('should return the square meter value', async () => {
      const repository = new SquareMeterRepository();
      const result = await repository.getValue();
      expect(result).toEqual(234);
    });
  });

});