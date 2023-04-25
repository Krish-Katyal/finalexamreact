import React, { useState } from 'react';
import axios from 'axios';
import '../styles.css';
//author,description,setOnChangetitle,setOnChangeauthor,setOnChangedescription
export default function CreateBook() {
  const [title,setOnChangetitle] = useState(``);
  const [author,setOnChangeauthor] = useState(``);
  const [description,setOnChangedescription] = useState(``);

  

  const onSubmit = (e) => {
    e.preventDefault();
    const bookvar = { title: title,
    author:author,
    desription:description };

    axios
      .post('http://localhost:5000/', bookvar)
      .then((res) => {
        window.location = '/';
      });
  };

  return (
    <div class="CreateBook">
      <div class="container">
        <div class="row">
          <div class="col-md-8 m-auto">
            <br /><a class="btn btn-info float-left" href="/">Show BooK List</a>
          </div>
          <div class="col-md-8 m-auto">
            <h1 class="display-4 text-center">Add Book</h1>
            <p class="lead text-center">Create new book</p>
            <form novalidate="">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  class="form-control"
                  value={title}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e)=> setOnChangetitle(e.target.value)}
                />
                </div>
                <div class="form-group">
                <input
                  type="text"
                  placeholder="Author"
                  name="author"
                  class="form-control"
                  value={author}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e)=> setOnChangeauthor(e.target.value)}

                />
              </div>
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  class="form-control"
                  value={description}
                  spellcheck="false"
                  data-ms-editor="true"
                  onChange={(e)=> setOnChangedescription(e.target.value)}

                />
              </div>
              <input type="submit"
               class="btn btn-info btn-block mt-4"
               onSubmit={onSubmit} />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}