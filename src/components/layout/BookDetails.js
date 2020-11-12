import React, { useContext }from 'react';
import { useLocation } from "react-router-dom";
import { BookshelfContext } from "../../contexts/BookshelfContext"
import "../../style/BookDetails.css";
import imgNotFound from "../../images/img_not_found.png";
import { WishlistContext } from "../../contexts/WishlistContext"

export default function BookDetails() {

  const [bookshelf, setBookshelf] = useContext(BookshelfContext);
  const [wishlist, setwishlist] = useContext(WishlistContext);

  const addToWishlist = (currentBook) => {
      if (isBookAddedToWishlist(currentBook.id)) {
          window.alert("Oops...You already added that book to your wishlist!");
      } else {
          setwishlist([...wishlist, currentBook]);
          console.log(currentBook);
      }
  }

  const isBookAddedToWishlist = (id) => {
      let bookOnWishlist = wishlist.filter(book => book.id === id);
      return bookOnWishlist.length > 0
  }

    const addToBookshelf = (currentBook) => {
      if (isBookAddedToBookshelf(currentBook.id)) {
        window.alert("Oops...You already added that book to your bookshelf!");
    } else {
        setBookshelf([...bookshelf, currentBook]);
        console.log(currentBook);
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
                src={imgNotFound}
                alt="not found"
              />
            )}
          <button onClick={() => {addToBookshelf(bookDetails.state.book)}}>Add to Bookshelf</button>
          <button onClick={() => {addToWishlist(bookDetails.state.book)}}>Add to Wishlist</button>
        </div>
      </div>

      <div className="book-description">
        <hr/>
        "{bookDetails.state.book.volumeInfo.description}"
      </div>

    </div>
  );
}
