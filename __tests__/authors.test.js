const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  test('/authors returns list', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length === 5);
  });
});
test('/authors/:id', async () => {
  const res = await request(app).get('/authors/1');
  expect(res.body).toEqual({
    id: expect.any(Number),
    name: expect.any(String),
    dob: expect.any(Date),
    pod: expect.any(String),
    books: expect.any(String),
  });
});
afterAll(() => {
  pool.end();
});
