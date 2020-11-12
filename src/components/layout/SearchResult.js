import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookCard from "../BookCard";

export default function SearchResult(props) {
  const { searchTerm } = useParams();
  const [books, setBooks] = useState([]);

  const fetchBooks = () => {
    axios
      .get(
        "https://www.googleapis.com/books/v1/volumes?q=" +
          searchTerm +
          "&maxResults=40" +
          "&key=AIzaSyBEfVoHvgADAJRNDBEFYgxyrfbzSLz1kok"
      )
      .then((response) => {
        if (response.data.totalItems !== 0) {
          setBooks(response.data.items);
          console.log("set books");
        } else {
          setBooks([]);
          console.log("Wrong query");
        }
      });
  };

  useEffect(() => {
    fetchBooks();
  }, [searchTerm]);

  return (
    <div className="card-container">
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
    </div>
  );
}
