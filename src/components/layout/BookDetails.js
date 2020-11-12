import React from 'react';
import { useLocation } from "react-router-dom";

export default function BookDetails() {
  let bookDetails = useLocation();
  console.log(bookDetails);

  return (
    <div>
      <h1>BookDetails</h1>
      <div>{bookDetails.state.book.volumeInfo.description}</div>
    </div>
  );
}
