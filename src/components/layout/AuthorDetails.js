import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BooksOfAuthor from "./BooksOfAuthor";

export default function AuthorDetails(props) {

  const [authorDetailsFromGoogle, setAuthorDetailsFromGoogle] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const path = window.location.pathname.split("/");
  const author = path[path.length - 1].replace("%20", " ")

  console.log(author);

  useEffect(() => {
    fetchTotalItemCount();
    fetchAllBooksOfAuthor();
  }, [])
  
  const fetchTotalItemCount = () => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + author + "&maxResults=1")
      .then(response => {
        setTotalItems(response.data.totalItems);
      });
  }

  const fetchAllBooksOfAuthor = () => {
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + author + "&maxResults=40")
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
