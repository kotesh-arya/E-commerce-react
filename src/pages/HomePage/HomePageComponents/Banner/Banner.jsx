import React from 'react'
import '../../../../Colours/colours.css';
import "../Banner/Banner.css";
import{Link} from "react-router-dom"
function Banner() {
return (
<div className="banner-container">
    <div className="banner">
        <img className="banner-image"
            src="https://github.com/kotesh-arya/E-commerce-website/blob/Dev/Components/Homepage/HomePage-assets/Home-page-banner.jpg?raw=true"
            alt="man and woman laughing at each other" />
        <div className="banner-text">
            <h1 className=" header-text header-huge">The Fashion choice of <br /> a Real Man</h1>
                <Link to="/ProductList">
                <button className="shop-button">SHOP NOW</button>
                </Link>
        </div>
    </div>
</div>
)
}

export {Banner}