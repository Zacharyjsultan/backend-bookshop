const Book = require('../models/Book');
const { Router } = require('express');

module.exports = Router().get('/', async (req, res) => {
  const bookDetails = await Book.getAll();
  res.json(bookDetails);
});
