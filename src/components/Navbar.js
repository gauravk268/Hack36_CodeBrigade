import React from "react";

const Navbar = (props) => {
  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="main-nav">
              <a href="/" className="logo">
                .CBS
              </a>

              <ul className="nav">
                <li className="scroll-to-section">
                  <a href="#top" className="active">
                    Home
                  </a>
                </li>
                <li className="scroll-to-section">
                  <a href="#about">About</a>
                </li>
                <li className="scroll-to-section">
                  <a href="#contact-us">Contact Us</a>
                </li>
                <div className="search-icon">
                  <a href="#search">{/* <i className="fa fa-search"></i> */}</a>
                </div>
              </ul>
              <a href="#top" className="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
