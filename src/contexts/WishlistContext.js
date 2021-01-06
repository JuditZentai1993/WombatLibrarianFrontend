import React, { useState, createContext, useEffect } from "react";
import axios from "axios";

export const WishlistContext = createContext();

export const WishlistProvider = (props) => {
  const [wishlist, setWishlist] = useState([]);

  
  useEffect(() => {
    axios
    .get("https://localhost:5001/api/wishlist/")
    .then(response => { 
      setWishlist([...response.data]);
    })
  }, [])

  return (
    <WishlistContext.Provider value={[wishlist, setWishlist]}>
      {props.children}
    </WishlistContext.Provider>
  );
};
