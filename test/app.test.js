const app = require('../index');

const request = require('supertest');

describe('Test / route', () => {
  describe('GET /', () => {
    it('should get 200', done => {
      request(app).get('/').expect(200, done);
    });

    it('should get Hello World', done => {
      request(app).get('/').expect('Hello, world!', done);
    });
  });
});
