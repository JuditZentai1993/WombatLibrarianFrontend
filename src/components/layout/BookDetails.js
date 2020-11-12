import React, { useContext }from 'react';
import { useLocation } from "react-router-dom";
import { BookshelfContext } from "../../contexts/BookshelfContext"
import "../../style/BookDetails.css";
import img_not_found from "../../img_not_found.png";

export default function BookDetails() {

  const [bookshelf, setBookshelf] = useContext(BookshelfContext);

    const addToBookshelf = (currentBook) => {
        const id = currentBook.id;
        const author = currentBook.volumeInfo.author;
        const title = currentBook.volumeInfo.title;
        const smallThumbnail = currentBook.volumeInfo.imageLinks.smallThumbnail;
        const bookToAdd = {id, author, title, smallThumbnail};
        if (isBookAddedToBookshelf(id)) {
            window.alert("Oops...You already added that book to your bookshelf!");
        } else {
            setBookshelf([...bookshelf, bookToAdd]);
        }
    }

    const isBookAddedToBookshelf = (id) => {
        let bookOnShelf = bookshelf.filter(book => book.id === id);
        return bookOnShelf.length > 0
    }

  let bookDetails = useLocation();

  return (
    <div className="book-details-container">

      <div className="book-details">
        <div className="detail-card">
          <h1>{bookDetails.state.book.volumeInfo.title}</h1>
          <h2><i>- {bookDetails.state.book.volumeInfo.subtitle}</i></h2>
          <h3>Written by {bookDetails.state.book.volumeInfo.authors}</h3>
          <div>Categories: <b>{bookDetails.state.book.volumeInfo.categories}</b></div>
          <div>Language: <b>{bookDetails.state.book.volumeInfo.language}</b></div>
          <div>Maturity rating: <b>{bookDetails.state.book.volumeInfo.maturityRating}</b></div>
          <div>Published in <b>{bookDetails.state.book.volumeInfo.publishedDate}</b></div>
          <div>Publisher: <b>{bookDetails.state.book.volumeInfo.publisher}</b></div>
        </div>
        
        <div className="book-cover">
          {typeof bookDetails.state.book.volumeInfo.imageLinks !== "undefined" ? (
              <img
                src={bookDetails.state.book.volumeInfo.imageLinks.thumbnail}
                alt={bookDetails.state.book.volumeInfo.title}
              />
            ) : (
              <img
                src={img_not_found}
                alt="image not found"
              />
            )}
          <button onClick={() => {addToBookshelf(bookDetails.state.book)}}>Add to Bookshelf</button>
        </div>

        <div className="book-description">
        <hr/>
          "{bookDetails.state.book.volumeInfo.description}"
        </div>
      </div>

    </div>
  );
}
