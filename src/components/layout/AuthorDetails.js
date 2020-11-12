import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BooksOfAuthor from "./BooksOfAuthor";
import InfiniteScroll from 'react-infinite-scroll-component';
import wombatLoading from "../../images/wombat_chewing.gif";

export default function AuthorDetails(props) {

  const [authorDetailsFromGoogle, setAuthorDetailsFromGoogle] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const maxResultsPerRequest = 40;
  const [startIndex, setStartIndex] = useState(0);

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
    axios.get("https://www.googleapis.com/books/v1/volumes?q=" + author.state 
    + "&startIndex=" + startIndex + "&maxResults=" + maxResultsPerRequest)
    .then(response => {
      setAuthorDetailsFromGoogle([...authorDetailsFromGoogle, ...response.data.items]);
      setStartIndex(startIndex + maxResultsPerRequest);
    });
  }

  return (
    <div>
      <InfiniteScroll className="card-container"
        dataLength={authorDetailsFromGoogle.length} 
        next={fetchAllBooksOfAuthor}
        hasMore={authorDetailsFromGoogle.length < totalItems}
        loader={<div><h4>Loading...</h4><img src={wombatLoading} alt="loading wombat" height="40%"/></div>}>
          <BooksOfAuthor books={authorDetailsFromGoogle} />
      </InfiniteScroll>
    </div>
  );
}
