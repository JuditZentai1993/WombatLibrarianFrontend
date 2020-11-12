import React from 'react';
import '../../style/Cards.css';
import BookCard from '../BookCard';

function BooksOfAuthor(props) {

    return (props.books.map(book => <BookCard book={book} key={book.id} />))
}

export default BooksOfAuthor;
