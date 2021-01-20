import React, { useContext } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
import BookCard from "../BookCard";
import axios from "axios";
import wombat from "../../images/wombat1.jpg";

  const Wishlist = () => {
    const [wishlist, setWishlist] = useContext(WishlistContext);

  const removeFromWishlist = (book) => {
    axios
    .delete("https://localhost:5001/api/wishlists/" + book.wishlistId)
    .then(() => {
      setWishlist([...wishlist.filter(item => item.id !== book.id)])
    })
  }

  return (
    <div>
      {
      wishlist.length > 0 ?
        (<div className="card-container">
          {wishlist.map((book) => (
            <div className="card-with-button">
            <BookCard book={book} key={book.id} />
            <button onClick={() => removeFromWishlist(book)}> Remove </button>
            </div>
        ))}
      </div>) : (<div>
          <p>There are no books added to your wishlist yet.</p>
          <img src={wombat} alt="Cute wombat" width="20%"/>
          </div>)}
    </div>
  );
}

export default Wishlist;