import React from 'react';
import '../../style/Cards.css';

function BooksOfAuthor(props) {

    return (
        props.books
            .filter(book => book.volumeInfo.language === "en")
            .map(book => 
                <div className="card">
                    <img className="book-smallthumbnail" src={book.volumeInfo.imageLinks.smallThumbnail} />
                    <p>{book.volumeInfo.title}</p>
                </div>)
    )
}

export default BooksOfAuthor;