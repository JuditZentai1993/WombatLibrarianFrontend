import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import Bookshelf from "./components/layout/Bookshelf";
import BookDetails from "./components/layout/BookDetails";
import Wishlist from "./components/layout/Wishlist";
import AuthorDetails from "./components/layout/AuthorDetails";
import SearchResult from "./components/layout/SearchResult";
import { BookshelfProvider } from "./contexts/BookshelfContext";

function App() {
  return (
    <div className="App">
      <BookshelfProvider>
        <Router>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
          <Route path="/bookshelf">
            <Bookshelf />
          </Route>
          <Route path="/bookdetails/:id">
            <BookDetails />
          </Route>
          <Route path="/authordetails/:name">
            <AuthorDetails />
          </Route>
          <Route path="/search/:searchTerm">
            <SearchResult />
          </Route>
        </Router>
      </BookshelfProvider>
    </div>
  );
}

export default App;
