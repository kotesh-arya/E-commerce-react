import React from "react";
import { Link } from "react-router-dom";
import { trending } from "../../../../backend/db/trending";
import "../../../../Colours/colours.css";
import "../TrendingCard/TrendingCard.css";
function TrendingCard() {
  return (
    <div className="trending-container">
      <div className="section-heading">
        <h1 className="header-extra-large ">TRENDING</h1>
        <div className="underline"></div>
      </div>
      <div className="trending">
        {trending.map((item) => {
          return (
            <div key={item._id} className="horizontal-card">
              <div className="horizontal-card-image-container">
                <img className="horizontal-card-image" src={item.imageSource} />
              </div>
              <div className="horizontal-card-content">
                <div className=" trend-card-title">{item.trendingTitle}</div>
                <p className="treding-card-text-content">{item.description}</p>
                <Link to="/ProductList">
                  <button className="btn trending-card-btn btn-link">
                    VIEW PRODUCT
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export { TrendingCard };
