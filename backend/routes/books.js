const router = require('express').Router();
let Book = require('../models/booklist.model');

router.route('/').get((req, res) => {
  Book.find()
    .then((activities) => res.json(activities))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/').post(async (req, res) => {
  const newBook = await new Book({
    title: req.body.title,
    author: req.body.author,
    description: req.body.description
  });

  console.log(newBook);
  newBook
    .save()
    .then(() => res.json('Book added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  console.log('just id' + req.params.id);
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete(async (req, res) => {
await Book.findByIdAndDelete(req.params.id)
    .then(() => res.json('Book deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').put(async (req, res) => {
  console.log(req.params.id);
 await Book.findByIdAndUpdate(req.params.id,{
  title : req.body.title,
  author: req.body.author,
  description: req.body.description
    })
    .then((bookforedit) => {
      bookforedit.book = req.body.book;

      bookforedit
        .save()
        .then(() => res.json('Book updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
