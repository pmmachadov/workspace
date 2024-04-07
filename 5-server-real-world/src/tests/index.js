// Import dependencies
const request = require('supertest');
const app = require('../app');

// Test the server endpoints
describe('Server Endpoints', () => {
  it('should return status code 200 and "Hello, World!" message', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toEqual(200);
    expect(res.body.message).toEqual('Hello, World!');
  });

  it('should return status code 404 for non-existent route', async () => {
    const res = await request(app).get('/non-existent-route');
    expect(res.statusCode).toEqual(404);
  });
});