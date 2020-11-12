import React from "react";
import { Link } from "react-router-dom";
import img_not_found from "../img_not_found.png";

export default function BookCard(props) {
  return (
    <Link to={{
      pathname: `/bookdetails/${props.book.id}`,
      state: props,
      style: { textDecoration: 'none' }
    }}>
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
            alt="image not found"
            className="book-thumbnail"
          />
        )}
        <div className="card-book-text-container">
          <p className="card-book-name">{props.book.volumeInfo.title}</p>
          <p className="card-book-page">
            Page: {props.book.volumeInfo.pageCount}
          </p>
          <p className="card-book-rating">
            {typeof props.book.volumeInfo.ratingsCount !== "undefined" ? (
              <p>
                Rating: {props.book.volumeInfo.averageRating} by (
                {props.book.volumeInfo.ratingsCount} user)
              </p>
            ) : null}
          </p>
          <p className="card-book-language">
            Language: {props.book.volumeInfo.language}
          </p>
        </div>
      </div>
    </Link>
  );
}
