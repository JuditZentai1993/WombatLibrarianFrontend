import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BookCard from "../BookCard";
import wombutt from "../../images/wombutt.jpg";
import wombatLoading from "../../images/wombat_chewing.gif";

export default function SearchResult(props) {
  const { searchTerm } = useParams();
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchBooks = () => {
    setIsLoading(true);
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
          setIsLoading(false);
        } else {
          setBooks([]);
          setIsLoading(false);
        }
      })
  };

  useEffect(() => {
    fetchBooks();
  }, [searchTerm]);

  return (<div>{isLoading ? (<div><h4>Loading...</h4><img src={wombatLoading} alt="loading wombat" height="40%"/></div>) : books.length === 0 ? 
  (<div>
      <h3 className="not-found">No items were found for {searchTerm}.</h3>
      <img src={wombutt} alt="no results"/>
    </div>) : (<div className="card-container">
      {books.map((book) => (
        <BookCard book={book} key={book.id} />
      ))}
  </div>)}</div>

  );
}
