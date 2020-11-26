import React, { useContext } from "react";
import { BookshelfContext } from "../../contexts/BookshelfContext";
import BookCard from "../BookCard";
import wombat from "../../images/wombat1.jpg";

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useContext(BookshelfContext);

  const removeFromBookShelf = (id) => {
    setBookshelf(bookshelf.filter(book => book.id !== id))
  }

  console.log("ITT A KAKII")
  console.log(bookshelf);

  return (
    <div>
      {
      bookshelf.length > 0 ? 
        (<div className="card-container">
          {bookshelf.map((book) => (
            <div className="card-with-button">
            <BookCard book={book} key={book.id} />
            <button onClick={() => removeFromBookShelf(book.id)}>Remove</button>
            </div>
          ))}
        </div>) : (<div>
          <p>There are no books added to your bookshelf yet.</p>
          <img src={wombat} alt="Cute wombat" width="20%"/>
          </div>)}
    </div>
  );
}

export default Bookshelf;