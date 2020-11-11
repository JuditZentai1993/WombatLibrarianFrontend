import React, { useContext } from 'react';
import '../../style/Cards.css';
import { BookshelfContext } from "../../contexts/BookshelfContext"
import BookCard from '../BookCard';

function BooksOfAuthor(props) {

    const [bookshelf, setBookshelf] = useContext(BookshelfContext);

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
                <BookCard book={book} />
                <button onClick={() => {addToBookshelf(book)}}>Add to Bookshelf</button>
                </div>)
    )
}

export default BooksOfAuthor;