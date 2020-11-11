import React, { useState, createContext } from 'react';

export const BookshelfContext = createContext();

export const BookshelfProvider = (props) => {
    const [bookshelf, setBookshelf] = useState([{
        id: "iyTdDwAAQBAJ",
        author: "Stephen King",
        title: "Tortúra",
        smallThumbnail: "http://books.google.com/books/content?id=iyTdDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api"
    }]);

    return (
        <BookshelfContext.Provider value={[bookshelf, setBookshelf]}>
            {props.children}
        </BookshelfContext.Provider>
    )
}