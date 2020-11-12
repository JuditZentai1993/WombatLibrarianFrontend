import React from "react";
import wombatWithGlasses from "../../images/wombat-with-glasses-prints.jpg";
import "../../style/Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="wombat-logo">
        <img alt="The wombat librarian" src={wombatWithGlasses} height={600}></img>
      </div>
      <div className="introduction">
        <br></br>
        <h1>Welcome to the Wombat Librarian!</h1>
        <br></br>
        <hr></hr>
          <p><i>It's all about the books!(And the wombats!)</i></p>
        <hr></hr>
        <p>
          <br></br>
          This site is for all the book lovers who want to keep a nice storage 
          of the books they have, have read, want to read; discuss, rate, comment, 
          find new books, basically, anything you want to do with books!
          Oh, and we also operate as a community library: just fill up your Bookshelf with
          the books you have, add some books to your Wishlist, and let the book-exchanging
          begin!
        </p>
        <br></br>
        <p>
        <hr></hr>
          <i>
          Have fun, read a lot, trade books, and don't forget about the wombats!
          </i>
        <hr></hr>
        </p>
      </div>
    </div>
  );
}
