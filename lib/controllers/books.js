const { Book } = require('../models/Books');
const { Router } = require('express');

module.exports = Router().get('/', async (req, res) => {
  const books = await Book.getAll();
  res.json(books);
});
