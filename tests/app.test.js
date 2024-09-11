// tests/app.test.js
const request = require('supertest');
const app = require('../app'); // Import only the app

let server;

describe('GET /', () => {
  // Start the server before each test
  beforeAll((done) => {
    server = app.listen(3000, () => {
      done();
    });
  });

  // Close the server after all tests
  afterAll((done) => {
    server.close(done);
  });

  it('should return Hello World', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.text).toBe('Hello World');
  });
});
