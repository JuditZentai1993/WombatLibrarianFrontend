import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import BooksOfAuthor from "./BooksOfAuthor";
import InfiniteScroll from "react-infinite-scroll-component";
import wombatLoading from "../../images/wombat_chewing.gif";

export default function AuthorDetails(props) {
  const [authorDetailsFromGoogle, setAuthorDetailsFromGoogle] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const maxResultsPerRequest = 40;
  const [startIndex, setStartIndex] = useState(0);
  const [hasMoreData, setHasMoreData] = useState(true);

  let author = useLocation();

  useEffect(() => {
    fetchBooksOfAuthor();
  }, []);

  const fetchBooksOfAuthor = () => {
    axios
      .get(
        "https://localhost:5001/api/author/" +
          author.state +
          "&startIndex=" +
          startIndex +
          "&maxResults=" +
          maxResultsPerRequest
      )
    .then(response => {
      try {
        if (totalItems === 0)
        setTotalItems(response.data.totalItems);
        setAuthorDetailsFromGoogle([...authorDetailsFromGoogle, ...response.data]);
        setStartIndex(startIndex + maxResultsPerRequest);
      } catch {
        setHasMoreData(false)
      }
    });
  };

  return (
    <div>
      <p>Total results: {totalItems}</p>
      <InfiniteScroll
        className="card-container"
        dataLength={authorDetailsFromGoogle.length}
        next={fetchBooksOfAuthor}
        hasMore={authorDetailsFromGoogle.length < totalItems}
        loader={
          hasMoreData ? (
            <div className = "wombat">
              <h4>Loading...</h4>
              <img src={wombatLoading} alt="loading wombat"/>
            </div>
          ) : null
        }
      >
        <BooksOfAuthor books={authorDetailsFromGoogle} />
      </InfiniteScroll>
    </div>
  );
}
