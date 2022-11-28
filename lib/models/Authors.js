const pool = require('../utils/pool');

class Author {
  id;
  name;
  dob;
  pod;

  constructor({ id, name, dob, pod, books }) {
    this.id = id;
    this.name = name;
    this.dob = dob;
    this.pod = pod;
    this.books = books;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT id, name FrOM authors;');
    return rows.map((row) => new Author(row));
  }
  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT authors.*,
      COALESCE(
            json_agg(to_jsonb(books))
            filter (WHERE books.id IS NOT NULL), '[]') as books
        FROM authors
        LEFT JOIN books_authors
        ON authors.id = books_authors.author_id
        LEFT JOIN books ON books.id = books_authors.book_id
        WHERE authors.id =$1
        GROUP BY authors.id;
      `,
      [id]
    );
    return new Author(rows[0]);
  }
}

module.exports = { Author };
