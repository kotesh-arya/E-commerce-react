import React from "react";
import "../../../../Colours/colours.css";
import "../NavBar/NavBar.css";
import { Link } from "react-router-dom";
import { useCart } from "../../../../contexts/cartContext";
import { useWishlist } from "../../../../contexts/wishlistContext";
import { useAuth } from "../../../../contexts/authContext";
const NavBar = () => {
  const { amount } = useCart();
  const { wishlist } = useWishlist();
  const { userName, isLoggedIn } = useAuth();
  return (
    <div className="navigation-container flex-div">
      <div className="nav-left flex-div">
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
      </div>

      <div className="nav-right flex-div">
        <h4>Hello {isLoggedIn ? userName : "User"}</h4>
        <nav className="main-links">
          <Link className="nav-icon-link" to="/WishList">
            <div className="nav-badge">
              <i
                className="fa fa-heart fa-2x header-icon "
                aria-hidden="true"
              ></i>
              <div className="number-one">
                {isLoggedIn ? wishlist.length : 0}
              </div>
            </div>
          </Link>

          <Link className="nav-icon-link" to="/Cart">
            <div className="nav-badge">
              <i
                className="fa fa-shopping-cart fa-2x header-icon "
                aria-hidden="true"
              ></i>
              <div className="number-one">{isLoggedIn ? amount : 0}</div>
            </div>
          </Link>

          <Link className="nav-icon-link" to="/SignIn">
            <i className="fa fa-user fa-2x header-icon" aria-hidden="true"></i>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export { NavBar };
