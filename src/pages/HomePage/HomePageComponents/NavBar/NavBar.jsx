import React from 'react'
import '../../../../Colours/colours.css';
import '../NavBar/NavBar.css';
import { Link } from 'react-router-dom';
import { FaHeart, FaCartPlus,FaUser,FaSearch } from 'react-icons/fa';

const NavBar =() => {
return (

<div className="navigation-container">
    <div className="logo-input">
        <div className="nav-header">
            <Link className='react-link' to="/">
            <h1 className='nav-heading'>Daily Fashion</h1>
            </Link>
        </div>
        <div className="search-input-container"><input className="header-input" type="search" />
            <div className=" input-icon">
                <FaSearch size="25" />
            </div>
        </div>
    </div>
    <nav className="main-links">
        <button className="btn-link">
            <Link className="link-button" to="/SignIn">LOG OUT</Link>
        </button>
        <Link className='react-link' to="/WishList">
          <div className="badge">
              < FaHeart size="30" />
              <div className="number-one">4</div>
          </div>
        </Link>

        <Link className='react-link' to="/Cart">
          <div className="badge">
              <FaCartPlus size="30" />
              <div className="number-one">3</div>
          </div>
        </Link>

        <a className="nav-icon-link" href="#">
          <FaUser className="react-link" size="29" /></a>

    </nav>
</div>

)
}

export {NavBar}