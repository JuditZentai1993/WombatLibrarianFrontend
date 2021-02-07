import React, { useContext }from 'react';
import { useLocation, Link } from "react-router-dom";
import { BookshelfContext } from "../../contexts/BookshelfContext"
import "../../style/BookDetails.css";
import imgNotFound from "../../images/img_not_found.png";
import { WishlistContext } from "../../contexts/WishlistContext";
import axios from 'axios';
import "../../style/Button.scss";

export default function BookDetails() {
  const [bookshelf, setBookshelf] = useContext(BookshelfContext);
  const [wishlist, setWishlist] = useContext(WishlistContext);

  const addToWishlist = (currentBook) => {
    if (isBookAddedToWishlist(currentBook.id)) {
      window.alert("Oops...You already added that book to your wishlist!");
    } else {
      axios({
        method: 'post',
        url: 'https://localhost:5001/api/wishlists/',
        data: {
          id: currentBook.id,
          authors: currentBook.volumeInfo.authors ? currentBook.volumeInfo.authors.map(author => {return {name: author}}) : [{name: "Unknown"}],
          categories: currentBook.volumeInfo.categories ? currentBook.volumeInfo.categories.map(category => {return {name: category}}) : [{name: "Unknown"}],
          title: currentBook.volumeInfo.title,
          description: currentBook.volumeInfo.description,
          pageCount: currentBook.volumeInfo.pageCount ? currentBook.volumeInfo.pageCount : 0,
          rating: currentBook.volumeInfo.averageRating ? currentBook.volumeInfo.averageRating : 0,
          ratingCount: currentBook.volumeInfo.ratingsCount ? currentBook.volumeInfo.ratingsCount : 0,
          language: currentBook.volumeInfo.language,
          maturityRating: currentBook.volumeInfo.maturityRating,
          published: currentBook.volumeInfo.publishedDate,
          publisher: currentBook.volumeInfo.publisher,
          thumbnail: currentBook.volumeInfo.imageLinks? currentBook.volumeInfo.imageLinks.thumbnail : null,
          subtitle: currentBook.volumeInfo.subtitle
        }
      })
      .then(response => currentBook.wishlistId = response.data.id);
      setWishlist([...wishlist, currentBook])
    }
  };

  const isBookAddedToWishlist = (id) => {
    let bookOnWishlist = wishlist.filter((book) => book.id === id);
    return bookOnWishlist.length > 0;
  };

  const addToBookshelf = (currentBook) => {
    if (isBookAddedToBookshelf(currentBook.id)) {
      window.alert("Oops...You already added that book to your bookshelf!");
    } else {
      axios({
        method: 'post',
        url: 'https://localhost:5001/api/bookshelves/',
        data: {
          id: currentBook.id,
          authors: currentBook.volumeInfo.authors ? currentBook.volumeInfo.authors.map(author => {return {name: author}}) : [{name: "Unknown"}],
          categories: currentBook.volumeInfo.categories ? currentBook.volumeInfo.categories.map(category => {return {name: category}}) : [{name: "Unknown"}],
          title: currentBook.volumeInfo.title,
          description: currentBook.volumeInfo.description,
          pageCount: currentBook.volumeInfo.pageCount ? currentBook.volumeInfo.pageCount : 0,
          rating: currentBook.volumeInfo.averageRating ? currentBook.volumeInfo.averageRating : 0,
          ratingCount: currentBook.volumeInfo.ratingsCount ? currentBook.volumeInfo.ratingsCount : 0,
          language: currentBook.volumeInfo.language,
          maturityRating: currentBook.volumeInfo.maturityRating,
          published: currentBook.volumeInfo.publishedDate,
          publisher: currentBook.volumeInfo.publisher,
          thumbnail: currentBook.volumeInfo.imageLinks? currentBook.volumeInfo.imageLinks.thumbnail : null,
          subtitle: currentBook.volumeInfo.subtitle
        }
      })
      .then(response => currentBook.bookshelfId = response.data.id);
      setBookshelf([...bookshelf, currentBook])
    }
  };

  const isBookAddedToBookshelf = (id) => {
    let bookOnShelf = bookshelf.filter(book => book.id === id);
    return bookOnShelf.length > 0;
  };

  let bookDetails = useLocation();

  const createAuthorsDisplay = (props) => {
    let authors = bookDetails.state.book.volumeInfo.authors;
    if (authors == null) return <p>(No authors information available)</p>
    let authorDisplay = [];
    for (let author of authors) {
    authorDisplay.push(<span><Link className="author-link" to={{pathname: "/authordetails/" + author.replaceAll(" ", "+"), state : author.replaceAll(" ", "+")}} >{author}</Link></span>)
    if (author !== authors[authors.length - 1]) {
      authorDisplay.push(<span>, </span>)
      }
    }
    return authorDisplay
  }

  return (
    <div className="book-details-container">
      <div className="book-details">
        <div className="detail-card">
          <h1>{bookDetails.state.book.volumeInfo.title}</h1>
          <h2>
            <i>- {bookDetails.state.book.volumeInfo.subtitle}</i>
          </h2>
          <h3>Written by {createAuthorsDisplay()}</h3>
          <div>
            Categories: 
            {bookDetails.state.book.volumeInfo.categories ? (
              bookDetails.state.book.volumeInfo.categories.map((category) => (
                <b key={category.id + category}>{category}</b>
              ))
            ) : (
              <b>Unknown</b>
            )}
            
          </div>
          <div>
            Language: <b>{bookDetails.state.book.volumeInfo.language}</b>
          </div>
          <div>
            Maturity rating:{" "}
            <b>{bookDetails.state.book.volumeInfo.maturityRating}</b>
          </div>
          <div>
            Published in{" "}
            {bookDetails.state.book.volumeInfo.publishedDate ? (
              <b>{bookDetails.state.book.volumeInfo.publishedDate}</b>
            ) : (
              <b>Unknown</b>
            )}
          </div>
          <div>
            Publisher: <b>{bookDetails.state.book.volumeInfo.publisher}</b>
          </div>
        </div>
        <div className="book-cover">
          {bookDetails.state.book.volumeInfo.imageLinks !==
          null ? (
            <img
              src={bookDetails.state.book.volumeInfo.imageLinks.thumbnail}
              alt={bookDetails.state.book.volumeInfo.title}
            />
          ) : (
            <img src={imgNotFound} alt="not found" />
          )}
          <button 
            className="add-btn"
            data-wipe="Add to Bookshelf"
            onClick={() => {
              addToBookshelf(bookDetails.state.book);
            }}
          >
            Add to Bookshelf
          </button>
          <button 
            className="add-btn"
            data-wipe="Add to Wishlist"
            onClick={() => {
              addToWishlist(bookDetails.state.book);
            }}
          >
            Add to Wishlist
          </button>
        </div>
      </div>

      <div className="book-description">
        <hr />"
        {typeof bookDetails.state.book.volumeInfo.description !== "undefined"
          ? bookDetails.state.book.volumeInfo.description
          : "No Description"}
        "
      </div>
    </div>
  );
}
