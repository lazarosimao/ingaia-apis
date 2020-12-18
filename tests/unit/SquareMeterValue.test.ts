import '@src/config/env';
import { SquareMeterRepository } from "@src/repositories/implementions/SquareMeterRepository";
import { squareMeterValueUseCase } from '@src/useCases/SquareMeterValue';
import Connection from "@src/usefulness/Connection";
import { HandleErrors } from '@src/usefulness/HandleErrors';

describe('Test Unit', () => {

  beforeAll(async () => {
    await Connection.initConnection(`mongodb://127.0.0.1:27017/ingaia_db`);
    
    const collections = await Connection.getConnection().db().listCollections();
    let collectionExists = false;

    collections.forEach(collection => {
      // @ts-ignore
      if (collection.name == 'test_api') {
        collectionExists = true;
      }
    });

    if (!collectionExists) {
      await Connection.getConnection().db().createCollection("test_api");
    }
    
      const mock = { _id: '5fda239cd849a6e46a36756e', value_m2: 234 };
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

  describe('UseCase', () => { 
    it('should return success', async () => {
      const expectedData = 234;
      const result = await squareMeterValueUseCase.execute();
      expect(result).toEqual(expectedData);
    });

    it('should fail value not found in the database', async () => {
      await Connection.getCollection(`test_api`).update({ _id: "5fda239cd849a6e46a36756e" }, { $set: {
        value_m2: ""} });
      
      await expect(squareMeterValueUseCase.execute())
        .rejects.toEqual(new HandleErrors(400, 'value not found in the database'));
      
      await Connection.getCollection(`test_api`).update({ _id: "5fda239cd849a6e46a36756e" }, { $set: {
        value_m2: 234} });
    });

  });

});