const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  test('/books returns list', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(6);
    expect(res.body[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      year: expect.any(Number),
    });
  });
  afterAll(() => {
    pool.end();
  });
});
