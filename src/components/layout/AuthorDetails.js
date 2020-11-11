import React, { useEffect, useState } from "react";
import axios from "axios";
import BooksOfAuthor from "./BooksOfAuthor";

export default function AuthorDetails() {

  const [authorDetailsFromGoogle, setAuthorDetailsFromGoogle] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    fetchTotalItemCount();
    fetchAllBooksOfAuthor();
  }, [])
  
  const fetchTotalItemCount = () => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=inauthor:stephen+king&maxResults=1")
      .then(response => {
        setTotalItems(response.data.totalItems);
      });
  }

  const fetchAllBooksOfAuthor = () => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=inauthor:stephen+king&maxResults=40")
    .then(response => {
      setAuthorDetailsFromGoogle(response.data.items);
    });
  }

  return (
    <div className="card-container">
      <BooksOfAuthor books={authorDetailsFromGoogle} />
    </div>
  );
}
