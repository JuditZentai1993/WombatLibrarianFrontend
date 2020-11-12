import React, { useState, createContext } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = (props) => {
  const [wishlist, setWishlist] = useState([]);

  return (
    <WishlistContext.Provider value={[wishlist, setWishlist]}>
      {props.children}
    </WishlistContext.Provider>
  );
};
