const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

const dbURI = 'mongodb+srv://krishkatyal05:krish@cluster0.4xahymr.mongodb.net/BookList?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to database'))
  .catch(err => console.log(err));

app.use(cors());

app.use(express.json());

const bookRouter = require('./routes/books');

app.use(bookRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
