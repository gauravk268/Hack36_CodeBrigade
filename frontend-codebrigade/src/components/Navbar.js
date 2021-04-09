import React from "react";

function Navbar(props) {
  return (
    <nav className="navbar navbar-light navbar-light bg-danger fixed-top">
      <div className="navbar-left-child h4">
        <a href="/">CBG</a>
      </div>
      <div className="navbar-right-child">
        <a className="navbar-link h5" href="/sign-up">
          3.5 &#127775;
        </a>
        <a className="navbar-link h5" href="/login">
          10 min
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
