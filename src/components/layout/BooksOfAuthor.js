import React, { useContext } from 'react';
import '../../style/Cards.css';
import { BookshelfContext } from "../../contexts/BookshelfContext";
import { WishlistContext } from "../../contexts/WishlistContext";

function BooksOfAuthor(props) {

    const [bookshelf, setBookshelf] = useContext(BookshelfContext);
    const [wishlist, setWishlist] = useContext(WishlistContext);

    const addToWhishlist = (currentBook) => {
        const id = currentBook.id;
        const author = currentBook.volumeInfo.author;
        const title = currentBook.volumeInfo.title;
        const smallThumbnail = currentBook.volumeInfo.imageLinks.smallThumbnail;
        const bookToAddWishlist = {id, author, title, smallThumbnail};
        if (isBookAddedToWishlist(id)) {
            window.alert("Oops...You already added that book to your bookshelf!");
        } else {
            setWishlist([...wishlist, bookToAddWishlist]);
        }
    }

    const isBookAddedToWishlist = (id) => {
        let bookOnWishlist = wishlist.filter(book => book.id === id);
        return bookOnWishlist.length > 0
    }



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
    
    return (
        props.books
            .map(book => 
                <div className="card" key={book.id}>
                    <p><img className="book-smallthumbnail" alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.smallThumbnail} /></p>
                    <p>{book.volumeInfo.title}</p>
                    <button onClick={() => {addToBookshelf(book)}}>Add to Bookshelf</button>
                    <button onClick={() => {addToWhishlist(book)}}>Add to Wishlist</button>
                </div>)
    )
}

export default BooksOfAuthor;