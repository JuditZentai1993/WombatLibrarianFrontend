import React, { useContext } from 'react';
import '../../style/Cards.css';
import { BookshelfContext } from "../../contexts/BookshelfContext"
import { WishlistContext } from "../../contexts/WishlistContext"
import BookCard from '../BookCard';

function BooksOfAuthor(props) {

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

    return (
        props.books
            .map(book => 
                <div>
                <BookCard book={book} key={book.id} />
                <button onClick={() => {addToBookshelf(book)}}>Add to Bookshelf</button>
                <button onClick={() => {addToWishlist(book)}}>Add to Wishlist</button>
                </div>)
    )
}

export default BooksOfAuthor;