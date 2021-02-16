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
          authors: currentBook.authors ? currentBook.authors.map(author => {return {name: author.name}}) : [{name: "Unknown"}],
          categories: currentBook.categories ? currentBook.categories.map(category => {return {name: category.name}}) : [{name: "Unknown"}],
          title: currentBook.title,
          description: currentBook.description,
          pageCount: currentBook.pageCount ? currentBook.pageCount : 0,
          rating: currentBook.rating ? currentBook.rating : 0,
          ratingCount: currentBook.ratingCount ? currentBook.ratingCount : 0,
          language: currentBook.language,
          maturityRating: currentBook.maturityRating,
          published: currentBook.published,
          publisher: currentBook.publisher,
          thumbnail: currentBook.thumbnail? currentBook.thumbnail : null,
          subtitle: currentBook.subtitle
        }
      })
      .then(response => {
        currentBook.wishlists = [];
        currentBook.wishlists.push({id: response.data.id});
      });
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
          authors: currentBook.authors ? currentBook.authors.map(author => {return {name: author.name}}) : [{name: "Unknown"}],
          categories: currentBook.categories ? currentBook.categories.map(category => {return {name: category.name}}) : [{name: "Unknown"}],
          title: currentBook.title,
          description: currentBook.description,
          pageCount: currentBook.pageCount ? currentBook.pageCount : 0,
          rating: currentBook.rating ? currentBook.rating : 0,
          ratingCount: currentBook.ratingCount ? currentBook.ratingCount : 0,
          language: currentBook.language,
          maturityRating: currentBook.maturityRating,
          published: currentBook.published,
          publisher: currentBook.publisher,
          thumbnail: currentBook.thumbnail? currentBook.thumbnail : null,
          subtitle: currentBook.subtitle
        }
      })
      .then(response => {
        currentBook.bookshelves = [];
        currentBook.bookshelves.push({id: response.data.id});
      });
      setBookshelf([...bookshelf, currentBook])
    }
  };

  const isBookAddedToBookshelf = (id) => {
    let bookOnShelf = bookshelf.filter(book => book.id === id);
    return bookOnShelf.length > 0;
  };

  let bookDetails = useLocation();

  const createAuthorsDisplay = (props) => {
    let authors = bookDetails.state.book.authors;
    if (authors == null) return <p>(No authors information available)</p>
    let authorDisplay = [];
    for (let author of authors) {
    authorDisplay.push(<span><Link className="author-link" to={{pathname: "/authordetails/" + author.name.replaceAll(" ", "+"), state : author.name.replaceAll(" ", "+")}} >{author.name}</Link></span>)
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
          <h1>{bookDetails.state.book.title}</h1>
          <h2>
            <i>- {bookDetails.state.book.subtitle}</i>
          </h2>
          <h3>Written by {createAuthorsDisplay()}</h3>
          <div>
            Categories: 
            {bookDetails.state.book.categories ? (
              bookDetails.state.book.categories.map((category) => (
                <b key={category.id}>{category.name}</b>
              ))
            ) : (
              <b>Unknown</b>
            )}
            
          </div>
          <div>
            Language: <b>{bookDetails.state.book.language}</b>
          </div>
          <div>
            Maturity rating:{" "}
            <b>{bookDetails.state.book.maturityRating}</b>
          </div>
          <div>
            Published in{" "}
            {bookDetails.state.book.published ? (
              <b>{bookDetails.state.book.published}</b>
            ) : (
              <b>Unknown</b>
            )}
          </div>
          <div>
            Publisher: <b>{bookDetails.state.book.publisher}</b>
          </div>
        </div>
        <div className="book-cover">
          {bookDetails.state.book.thumbnail !==
          null ? (
            <img
              src={bookDetails.state.book.thumbnail}
              alt={bookDetails.state.book.title}
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
        {typeof bookDetails.state.book.description !== "undefined"
          ? bookDetails.state.book.description
          : "No Description"}
        "
      </div>
    </div>
  );
}
