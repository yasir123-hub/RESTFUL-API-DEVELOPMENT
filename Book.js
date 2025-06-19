const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  isbn: String,
  publishedDate: String,
  copiesAvailable: Number
});

module.exports = mongoose.model('Book', bookSchema);
