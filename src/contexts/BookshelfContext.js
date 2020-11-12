import React, { useState, createContext } from 'react';

export const BookshelfContext = createContext();

export const BookshelfProvider = (props) => {
    const [bookshelf, setBookshelf] = useState([]);

    return (
        <BookshelfContext.Provider value={[bookshelf, setBookshelf]}>
            {props.children}
        </BookshelfContext.Provider>
    )
}