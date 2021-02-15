import React, { useContext } from "react";
import { BookshelfContext } from "../../contexts/BookshelfContext";
import BookCard from "../BookCard";
import axios from "axios";
import wombat from "../../images/wombat1.jpg";

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useContext(BookshelfContext);

  const removeFromBookShelf = (book) => {
    axios
    .delete("https://localhost:5001/api/bookshelves/" + book.bookshelfId + "/" + book.id)
    .then(() => {
      setBookshelf([...bookshelf.filter(item => item.id !== book.id)])
    })
  }

  return (
    <div>
      {bookshelf.length > 0 ? 
        (<div className="card-container">
          {bookshelf.map((book) => (
            <div className="card-with-button">
              <BookCard book={book} key={book.id} />
              <button onClick={() => removeFromBookShelf(book)}>
                Remove
              </button>
            </div>
        ))}
        </div>
      ) : (
        <div>
          <p>There are no books added to your bookshelf yet.</p>
          <img src={wombat} alt="Cute wombat" width="20%" />
        </div>
      )}
    </div>
  );
};

export default Bookshelf;
