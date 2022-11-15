const pool = require('../utils/pool');

module.exports = class Book {
  constructor({ id, title, year }) {
    this.id = id;
    this.title = title;
    this.year = year;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * FROM books');
    return rows.map((row) => new Book(row));
  }
};
