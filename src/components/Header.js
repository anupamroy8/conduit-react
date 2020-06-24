import React from "react";

function Header() {
    return(
        <div className="header">
        <nav className="flex container">
          <h1>
            <a href="#">conduit</a>
          </h1>
          <ul>
            <a href="#">Home</a>
            <a href="#">Sign in</a>
            <a href="#">Sign up</a>
          </ul>
        </nav>
      </div>
    )
}

export default Header;