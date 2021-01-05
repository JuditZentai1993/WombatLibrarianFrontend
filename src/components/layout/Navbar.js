import React, { useState, useContext} from "react";
import { BookshelfContext } from "../../contexts/BookshelfContext"
import { Redirect, Link } from "react-router-dom";
import "../../style/Navbar.css";
import axios from "axios";

export default function Navbar() {
  const [bookshelf, setBookshelf] = useContext(BookshelfContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResult(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getBookshelfContent = (event) => {
    axios
      .get("https://localhost:5001/api/bookshelf/")
      .then(response => { 
        setBookshelf([response.data]);
      })
  }

  return (
    <div className="navbar">
      <ul>
        <li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/bookshelf" onClick={getBookshelfContent}>Bookshelf</Link>
          </li>
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
        </li>
        <li className="search-container">
          {searchResult === null || searchResult !== searchTerm ? null : (
            <Redirect to={"/search/" + searchTerm} />
          )}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              minLength="3"
            />
            <button type="submit" disabled={searchTerm === ""} className="fa fa-search">
              Search
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
}
