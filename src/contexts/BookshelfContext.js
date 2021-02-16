import React, { useState, createContext, useEffect } from 'react';
import axios from "axios";

export const BookshelfContext = createContext();

export const BookshelfProvider = (props) => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        axios
        .get("https://localhost:5001/api/bookshelves/")
        .then(response => {
            console.log(response)
            console.log(bookshelf)
          setBookshelf([...response.data]);
        })
    }, [])

    return (
        <BookshelfContext.Provider value={[bookshelf, setBookshelf]}>
            {props.children}
        </BookshelfContext.Provider>
    )
}