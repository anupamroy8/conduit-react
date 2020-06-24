import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <nav className="flex container">
        <h1>
          <Link to="/">conduit</Link>
        </h1>
        <ul>
          <Link to="/">Home</Link>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Sign up</Link>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
