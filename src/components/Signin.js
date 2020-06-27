import React from "react";
import {Link} from "react-router-dom"

function Signin() {
  return (
    <>
      <div className="center ">
        <h1>Sign In</h1>
        <Link to="/register" className="textcolor">Need an account?</Link>
        <form className="signinform formcontainer">
          <input type="text" className="form-control form-control-lg" placeholder="Email" />
          <br />
          <input type="text" className="form-control form-control-lg" placeholder="Password" />
          <br />
          <input className="btn btn-success" type="submit" value="Sign In" />
        </form>
      </div>
    </>
  );
}

export default Signin;