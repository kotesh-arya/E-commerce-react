import React from "react";
import "../../../../Colours/colours.css";
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navigation-container">
      <div className="nav-header">
        <Link className="site-title" to="/">
          <img
            className="site-logo"
            src="https://blog.flamingtext.com/blog/2022/06/01/flamingtext_com_1654077526_636886034.png"
            border="0"
            alt="Logo"
            title="Logo"
          />
        </Link>
      </div>

      <Link className="header-shop-link" to="/ProductList">
        <h4>SHOP NOW</h4>
      </Link>

      <div className="search-input-container">
        <input
          className="header-input"
          placeholder="Type here..."
          type="search"
        />
        <img
          className=" input-icon"
          src="https://img.icons8.com/material/28/000000/search--v1.png"
        />
      </div>

      <nav className="main-links">
        {/* <Link className="nav-icon-link" to="/WishList">
          <div className="nav-badge">
            <i
              className="fa fa-heart fa-2x header-icon "
              aria-hidden="true"
            ></i>
            <div className="number-one">3</div>
          </div>
        </Link> */}

        {/* <Link className="nav-icon-link" to="/Cart">
          <div className="nav-badge">
            <i
              className="fa fa-shopping-cart fa-2x header-icon "
              aria-hidden="true"
            ></i>
            <div className="number-one">1</div>
          </div>
        </Link> */}

        {/* <Link className="nav-icon-link" to="/SignIn">
          <i className="fa fa-user fa-2x header-icon" aria-hidden="true"></i>
        </Link> */}

        <ul id="menu-list">
          <li>
            <Link className="nav-icon-link" to="/WishList">
              <div className="nav-badge">
                <i
                  className="fa fa-heart fa-2x header-icon "
                  aria-hidden="true"
                ></i>
                <div className="number-one">3</div>
              </div>
            </Link>
          </li>
          <li>
            <Link className="nav-icon-link" to="/Cart">
              <div className="nav-badge">
                <i
                  className="fa fa-shopping-cart fa-2x header-icon "
                  aria-hidden="true"
                ></i>
                <div className="number-one">1</div>
              </div>
            </Link>
          </li>
          <li>
            <Link className="nav-icon-link" to="/SignIn">
              <i
                className="fa fa-user fa-2x header-icon"
                aria-hidden="true"
              ></i>
            </Link>
          </li>
          {/* <li></li> */}
        </ul>
      </nav>
    </div>
  );
};

export { NavBar };
