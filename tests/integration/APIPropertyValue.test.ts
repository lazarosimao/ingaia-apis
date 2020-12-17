import '@src/config/env';
import request from 'supertest';
import App from '@src/Api';
const app = App;

describe('Test Integration', () => {
  const m2 = 36;

  describe('POST /api/v1/property-value', () => {
    it('Should return status code 200', async (done) => {
      request(app)
        .post('/api/v1/property-value')
        .send({ m2: m2})
        .end((err, res) => {
        expect(res.status).toBe(200);
        done(err);
      });
    });

    it('Should return response success', async (done) => {
      const expectedData = "{\"statusCode\":200,\"message\":\"ok\",\"payload\":{\"m2\":36,\"valueM2\":79,\"propertyPrice\":2844}}";
      request(app)
        .post('/api/v1/property-value')
        .send({ m2: m2})
        .end((err, res) => {
        expect(res.text).toEqual(expectedData);
        done(err);
      });
    });
  });

});