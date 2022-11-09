const setup = require('../../data/setup');
const pool = require('../utils/pool');

describe('Books test routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
});
