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

  const fetchBooks = async () => {
    setIsLoading(true);
    axios
      .get("https://localhost:5001/api/search/" + searchTerm)
      .then((response) => {
        if (response.data.length !== 0) {
          setBooks(response.data);
          setIsLoading(false);
        } else {
          setBooks([]);
          setIsLoading(false);
        }
      });
  };

  useEffect(() => {
    fetchBooks();
  }, [searchTerm]);

  let searchInput = document.getElementById('searchForm');
  searchInput.value = "";
  
  return (
    <div>
      {isLoading ? (
        <div className="wombat">
          <h4>Loading...</h4>
          <img src={wombatLoading} alt="loading wombat" />
        </div>
      ) : books.length === 0 ? (
        <div>
          <h3 className="not-found">No items were found for {searchTerm}.</h3>
          <img src={wombutt} alt="no results" />
        </div>
      ) : (
        <div className="card-container">
          {books.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>
      )}
    </div>
  );
}
