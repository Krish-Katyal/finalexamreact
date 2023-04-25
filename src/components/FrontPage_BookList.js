import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../styles.css";

const BookCount = (props) => (
  <h2> Book Count: {props.bookCount}</h2>

);

const BookCard = (props) => (
  <div class="list">
  <div class="card-container">
    <img
      src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
      alt="Books"
      height="200"
    />
    <div class="desc">
      <h2><a href= {`/show-book/${props.keyt}`}>{props.title}</a></h2>
      <h3>{props.author}</h3>
      <p>{props.description}</p>
     
    </div>
    <button
        onClick={() => {
          props.DeleteBook(props.keyt);
        }} style={{textAlign:'right'}}>x</button>
    </div>
    </div>
);

export default function BookList() {
    const [books, setBooks] = useState([]);
  
    useEffect(() => {
      axios
        .get('http://localhost:5000')
        .then((res) => {
          setBooks(res.data);
        })
        .catch((err) => {
          console.log('Error from BookList');
        });
    }, []);
    
    const bookCount = books.length;

    const deleteBook = (id) => {
      axios
        .delete('http://localhost:5000/' + id)
        .then((response) => {
          console.log(response.data);
        });
  
      setBooks(books.filter((el) => el._id !== id));
    };
  
    const bookList =
      books.length === 0
        ? 'there is no book record!'
        : books.map((book, k) => <BookCard title={book.title} author={book.author} description = {book.description} key = {k} keyt = {book._id} DeleteBook = {deleteBook}    />);
  
    return (
      <div className='BookList'>
        
        <div className='container'>
          <div className='row'>
            <div className='col-md-12'>
              <br />
              <h2 className='display-4 text-center'>Books List</h2>
            </div>
         
            <div className='col-md-11'>
              <Link
                to='/create-book'
                className='btn btn-outline-warning float-right'
              >
                + Add New Book
              </Link>
              <br />
              <br />
              <hr />
            </div>
          </div>
          <BookCount
        bookCount = {bookCount}
        />
          <div className='list'>{bookList}</div>
          
        </div>
      </div>
    );
  }