const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    description: { type: String }
  });

const Book = mongoose.model('300347035-krish', bookSchema); 
module.exports = Book;