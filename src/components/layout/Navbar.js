import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "../../style/Navbar.css";

export default function Navbar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResult(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/bookshelf">Bookshelf</a>
          </li>
          <li>
            <a href="/wishlist">Wishlist</a>
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
            <button type="submit" className="fa fa-search">
              Search
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
}
