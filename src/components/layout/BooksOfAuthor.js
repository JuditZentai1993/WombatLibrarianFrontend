import React, { useContext } from 'react';
import '../../style/Cards.css';
import { BookshelfContext } from "../../contexts/BookshelfContext"

function BooksOfAuthor(props) {

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
    
    return (
        props.books
            .map(book => 
                <div className="card" key={book.id}>
                    <p><img className="book-smallthumbnail" alt={book.volumeInfo.title} src={book.volumeInfo.imageLinks.smallThumbnail} /></p>
                    <p>{book.volumeInfo.title}</p>
                    <button onClick={() => {addToBookshelf(book)}}>Add to Bookshelf</button>
                </div>)
    )
}

export default BooksOfAuthor;