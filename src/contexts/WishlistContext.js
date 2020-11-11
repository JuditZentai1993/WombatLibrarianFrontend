import React, { useState, createContext } from "react";

export const WishlistContext = createContext();

export const WishlistProvider = (props) => {
  const [wishlist, setWishlist] = useState([
    {
      id: "iyTdDwAAQBAJ",
      author: "Stephen King",
      title: "Tortúra",
      smallThumbnail:
        "http://books.google.com/books/content?id=iyTdDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    },
  ]);

  return (
    <WishlistContext.Provider value={[wishlist, setWishlist]}>
      {props.children}
    </WishlistContext.Provider>
  );
};
