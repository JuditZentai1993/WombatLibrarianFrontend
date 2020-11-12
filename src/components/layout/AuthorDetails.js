import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BooksOfAuthor from "./BooksOfAuthor";

export default function AuthorDetails(props) {

  const [authorDetailsFromGoogle, setAuthorDetailsFromGoogle] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  let author = useLocation();

  useEffect(() => {
    fetchTotalItemCount();
    fetchAllBooksOfAuthor();
  }, [])
  
  const fetchTotalItemCount = () => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + author.state + "&maxResults=1")
      .then(response => {
        setTotalItems(response.data.totalItems);
      });
  }

  const fetchAllBooksOfAuthor = () => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + author.state + "&maxResults=40")
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
