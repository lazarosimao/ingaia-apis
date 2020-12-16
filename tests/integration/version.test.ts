import request from 'supertest';
import App from '@src/Api';
const app = App;

describe('Test Integration', () => {

  describe('GET /api/v1/version', () => {
    it('Should return the API version', (done) => {
      request(app).get('/api/v1/version').end((err, res) => {
        expect(res.status).toBe(200);
        expect(res.text).toEqual("Version: 1.0.0");
        done(err);
      });
    });
  });

});