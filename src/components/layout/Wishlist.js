import React, { useContext } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";

export default function Wishlist() {
  const [wishlist, setWishlist] = useContext(WishlistContext);

  return (
    <div className="card-container">
      {wishlist.map((book) => (
        <div className="card" key={book.id}>
          <p>
            <img
              className="book-smallthumbnail"
              alt={book.title}
              src={book.smallThumbnail}
            />
          </p>
          <p>{book.title}</p>
        </div>
      ))}
    </div>
  );
}
