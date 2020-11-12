import React, { useContext }from 'react';
import { useLocation } from "react-router-dom";
import { BookshelfContext } from "../../contexts/BookshelfContext"
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
  console.log(bookDetails);

  return (
    <div className="book-details-container">

      <div className="book-details">
        <div className="detailCard">
          <h1>{bookDetails.state.book.volumeInfo.title}</h1>
          <h2>{bookDetails.state.book.volumeInfo.subtitle}</h2>
          <h2>Written by {bookDetails.state.book.volumeInfo.authors}</h2>
          <div>Categories: {bookDetails.state.book.volumeInfo.categories}</div>
          <div>Language: {bookDetails.state.book.volumeInfo.language}</div>
          <div>Maturity rating: {bookDetails.state.book.volumeInfo.maturityRating}</div>
          <div>Published in {bookDetails.state.book.volumeInfo.publishedDate}</div>
          <div>Publisher: {bookDetails.state.book.volumeInfo.publisher}</div>
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
          "{bookDetails.state.book.volumeInfo.description}"
        </div>
      </div>

    </div>
  );
}
