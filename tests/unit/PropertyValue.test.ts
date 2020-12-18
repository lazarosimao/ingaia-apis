import '@src/config/env';
import SquareMeterService from '@src/services/SquareMeterService';
import { PropertyValueUseCase } from '@src/useCases/PropertyValue/PropertyValueUseCase';
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

  describe('UseCase', () => { 
    const service = new SquareMeterService();
    const propertyValueUseCase = new PropertyValueUseCase(service);

    it('should return success', async () => {
      const data = { m2: 36 };
      const expectedData = {"m2": 36, "propertyPrice": 1404, "valueM2": 39};
      const result = await propertyValueUseCase.execute(data);
      expect(result).toEqual(expectedData);
    });

    it('should return a value calculate of property', async () => {
      const m2 = 20;
      const valueM2 = 45;
      const expectedData = 900;
      const result = propertyValueUseCase.calculate(m2, valueM2);
      expect(result).toEqual(expectedData);
    });

    it('should return true param square meter', async () => {
      const m2 = 20;
      const result = propertyValueUseCase.isNumeric(m2);
      expect(result).toEqual(true);
    });

    it('should return false param square meter', async () => {
      const m2 = "sad";
      const result = propertyValueUseCase.isNumeric(m2);
      expect(result).toEqual(false);
    });

    it('should return false at validation if param square meter to be in range values', async () => {
      const m2 = 8;
      const result = propertyValueUseCase.rangeValue(m2);
      expect(result).toEqual(false);
    });

    it('should return false at validation if param square meter to be in range values', async () => {
      const m2 = 10001;
      const result = propertyValueUseCase.rangeValue(m2);
      expect(result).toEqual(false);
    });

    it('should return true at validation if param square meter to be in range values', async () => {
      const m2 = 38;
      const result = propertyValueUseCase.rangeValue(m2);
      expect(result).toEqual(true);
    });

    it('should fail value m2 not or invalid send', async () => {
      const data = { m2: "sas" }

      // @ts-ignore
      await expect(propertyValueUseCase.execute(data))
        .rejects.toEqual(new HandleErrors(400, 'value m2 not or invalid send'));
    });

    it('should fail Invalid parameter. Value less than ten square meters', async () => {
      const data = { m2: 8 };

      // @ts-ignore
      await expect(propertyValueUseCase.execute(data))
        .rejects.toEqual(new HandleErrors(400, 'Invalid parameter. Value less than ten square meters'));
    });

    it('should fail Invalid parameter. Value greater than ten thousand square meters', async () => {
      const data = { m2: 10001 };

      // @ts-ignore
      await expect(propertyValueUseCase.execute(data))
        .rejects.toEqual(new HandleErrors(400, 'Invalid parameter. Value greater than ten thousand square meters'));
    });

  });

});