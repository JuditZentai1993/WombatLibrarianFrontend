import React from "react";
import { Link } from "react-router-dom";
import imgNotFound from "../images/img_not_found.png";
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

export default function BookCard(props) {
  const createAuthorsDisplay = () => {
    const authors = props.book.volumeInfo.authors;
    if (authors == null) return ""
    else {
      let authorsToDisplay = "";
      for (let author of authors) {
        authorsToDisplay += author + ", "
      }
      authorsToDisplay = authorsToDisplay.slice(0, (authorsToDisplay.length - 2));
      const authorDisplayLimit = 42
      if (authorsToDisplay.length < authorDisplayLimit) return authorsToDisplay
      else return authorsToDisplay.slice(0, authorDisplayLimit) + "..."
    }
  }
  let authorsToDisplay = createAuthorsDisplay();

  const createtitlesDisplay = () => {
  const titles = props.book.volumeInfo.title;
  if (titles === undefined) return ""
  else {
    let titlesToDisplay = "";
    titlesToDisplay += titles
    titlesToDisplay = titlesToDisplay.slice(0, (titlesToDisplay.length - 0));
    const titlesDisplayLimit = 50
    if (titlesToDisplay.length < titlesDisplayLimit) return titlesToDisplay
    else return titlesToDisplay.slice(0, titlesDisplayLimit) + "..."
  }
}
let titlesToDisplay = createtitlesDisplay();

  return (
    <Link className="link" to={{
      pathname: `/bookdetails/${props.book.id}`,
      state: props,
      style: { textDecoration: 'none' }
    }}>
      <div className="card">
        {props.book.volumeInfo.imageLinks != null ? (
          <img
            src={props.book.volumeInfo.imageLinks.thumbnail}
            alt={props.book.volumeInfo.title}
            className="book-thumbnail"
          />
        ) : (
          <img
            src={imgNotFound}
            alt="not found"
            className="book-thumbnail"
          />
        )}
      <div className="card-book-text-container">
        <p className="card-book-name">{titlesToDisplay}</p>
        <p className="card-book-author">{authorsToDisplay}</p>
        <p className="card-book-page">
          {props.book.volumeInfo.pageCount ? (
            <p>
              {props.book.volumeInfo.pageCount} pages
            </p>
          ) : null}
        </p>
        <p className="card-book-rating">
          {props.book.volumeInfo.ratingsCount ? (
            <p>
              <Rater total={5} rating={props.book.volumeInfo.averageRating} interactive={false} /> ({props.book.volumeInfo.ratingsCount})
            </p>
          ) : <p>
                <Rater total={5} rating={0} interactive={false} /> (0) 
              </p>
          }
        </p>
        <p className="card-book-language">
          Language: {props.book.volumeInfo.language}
        </p>
        </div>
      </div>
    </Link>
  );
}
