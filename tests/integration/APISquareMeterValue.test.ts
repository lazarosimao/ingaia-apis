import '@src/config/env';
import request from 'supertest';
import App from '@src/Api';
import Connection from "@src/usefulness/Connection";
const app = App;

describe('Test Integration', () => {

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

  describe('GET /api/v1/square-meter-value', () => {
    it('Should return status code 200', async (done) => {
      request(app).get('/api/v1/square-meter-value').end((err, res) => {
        expect(res.status).toBe(200);
        done(err);
      });
    });

    it('Should return response success', async (done) => {
      const expectedData = "{\"statusCode\":200,\"message\":\"ok\",\"payload\":234}";
      request(app).get('/api/v1/square-meter-value').end((err, res) => {
        expect(res.text).toEqual(expectedData);
        done(err);
      });
    });
  });

});