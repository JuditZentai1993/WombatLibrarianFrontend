import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <h1>Navbar</h1>
      <Link to="/bookshelf">
          Bookshelf
      </Link>
    </div>
  );
}
