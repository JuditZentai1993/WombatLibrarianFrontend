import React, { useContext } from "react";
import { BookshelfContext } from "../../contexts/BookshelfContext";

export default function Bookshelf() {
  const [bookshelf, setBookshelf] = useContext(BookshelfContext);

  return (
    <div className="card-container">
      {bookshelf.map((book) => (
        <div className="card" key={book.id}>
          <p>
            <img
              className="book-smallthumbnail"
              alt={book.title}
              src={book.smallThumbnail}
            />
          </p>
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
}
