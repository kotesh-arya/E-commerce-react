import React from "react";
import "../../../../Colours/colours.css";
import "../Banner/Banner.css";
import { Link } from "react-router-dom";
function Banner() {
  return (
    <Link to="/ProductList">
      <div className="banner-container">
        <div className="banner">
          <img
            className="banner-image"
            src="https://assets.ajio.com/cms/AJIO/WEB/11032022-D-Unisex-FreshofftheRunway-premiumbrands-upto30.jpg"
            alt="mem at beach laughing "
          />
        </div>
      </div>
    </Link>
  );
}

export { Banner };
