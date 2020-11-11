import React, { useContext } from "react";
import { BookshelfContext } from "../../contexts/BookshelfContext";

export default function Bookshelf() {
  const bookshelf = useContext(BookshelfContext)[0];

  return (
    <div>
      <h1>Bookshelf</h1>
    </div>
  );
}
