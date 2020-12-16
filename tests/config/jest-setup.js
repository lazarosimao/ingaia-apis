import supertest from 'supertest';
import app from '@src/Api';

beforeAll(async () => {
  server = new SetupServer();
  await server.init();
  global.testRequest = supertest(app);
});

afterAll(async () => await server.close());