import React, { useContext } from "react";
import { BookshelfContext } from "../../contexts/BookshelfContext";
import BookCard from "../BookCard";

const Bookshelf = () => {
  const bookshelf = useContext(BookshelfContext)[0];

  console.log(bookshelf);

  return (
    <div className="card-container">
      {
      bookshelf.length > 0 ? 
        (<div>
          {bookshelf.map((book) => (
            <BookCard book={book} key={book.id} />
          ))}
        </div>) : (<p>There are no books added to your bookshelf yet.</p>)}
    </div>
  );
}

export default Bookshelf;