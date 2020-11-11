import React from "react";
import img_not_found from "../img_not_found.png";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default function BookCard(props) {
  const createAuthorsDisplay = () => {
    const authors = props.book.volumeInfo.authors;
    if (authors.length === 1) return authors[0]
    else {
      let authorsToDisplay = "";
      for (let author of authors) {
        authorsToDisplay += author + ", "
      }
      authorsToDisplay = authorsToDisplay.slice(0, (authorsToDisplay.length - 2));
      const authorDisplayLimit = 35
      if (authorsToDisplay.length < authorDisplayLimit) return authorsToDisplay
      else return authorsToDisplay.slice(0, authorDisplayLimit) + "..."
    }
  }

  let authorsToDisplay = createAuthorsDisplay();

  return (
    <div className="card">
      {typeof props.book.volumeInfo.imageLinks !== "undefined" ? (
        <img
          src={props.book.volumeInfo.imageLinks.thumbnail}
          alt={props.book.volumeInfo.title}
          className="book-thumbnail"
        />
      ) : (
        <img
          src={img_not_found}
          alt="not found"
          className="book-thumbnail"
        />
      )}
      <div className="card-book-text-container">
        <p className="card-book-name">{props.book.volumeInfo.title}</p>
        <p className="card-book-author">{authorsToDisplay}</p>
        {/* <p className="card-book-page">
          Page: {props.book.volumeInfo.pageCount}
        </p> */}
        <p className="card-book-page">
          {typeof props.book.volumeInfo.pageCount !== "undefined" ? (
            <p>
              {props.book.volumeInfo.pageCount} pages
            </p>
          ) : null}
        </p>
        <p className="card-book-rating">
          {typeof props.book.volumeInfo.ratingsCount !== "undefined" ? (
            <p>
              <Rater total={5} rating={props.book.volumeInfo.averageRating} interactive={false} /> ({props.book.volumeInfo.ratingsCount})
            </p>
          ) : null}
        </p>
        <p className="card-book-language">
          Language: {props.book.volumeInfo.language}
        </p>
      </div>
    </div>
  );
}
