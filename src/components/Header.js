import React from "react";
import { Link, NavLink } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <nav className="flex container">
          <h1>
            <Link to="/">conduit</Link>
          </h1>
          <ul>{this.props.isLoggedIn ? <AuthHeader /> : <NonAuthHeader />}</ul>
        </nav>
      </div>
    );
  }
}

const AuthHeader = () => (
  <>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/login" exact>
      New Post
    </NavLink>
    <NavLink to="/login" activeClassName="active">
      Setting
    </NavLink>
    <NavLink to="/register" activeClassName="active">
      User
    </NavLink>
  </>
);

const NonAuthHeader = () => (
  <>
    <NavLink to="/" exact>
      Home
    </NavLink>
    <NavLink to="/login" activeClassName="active">
      Sign in
    </NavLink>
    <NavLink to="/register" activeClassName="active">
      Sign up
    </NavLink>
  </>
);

export default Header;
