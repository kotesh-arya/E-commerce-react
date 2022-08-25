import React from "react";
import { Link } from "react-router-dom";
import { useProducts } from "../../../../contexts/productContext";
import "../../../../Colours/colours.css";
import "../TrendingCard/TrendingCard.css";
function TrendingCard() {
  const { allProducts } = useProducts();
  const shuffled = allProducts.sort(() => 0.5 - Math.random());

  // Get sub-array of first n elements after shuffled
  let trendingProducts = shuffled.slice(0, 2);

  // const trendingProducts = allProducts?.slice(0, 2);
  return (
    <div className="trending-container">
      <div className="section-heading">
        <h1 className="header-extra-large ">TRENDING</h1>
        <div className="underline"></div>
      </div>
      <div className="trending">
        {trendingProducts.map((item, index) => {
          return (
            <Link
              className="trending-link-card"
              to={`/Product/${item._id}`}
              key={item._id}
            >
              <div className="horizontal-card">
                <div className="horizontal-card-image-container">
                  <img
                    className="horizontal-card-image"
                    src={item.imageSource}
                  />
                </div>
                <div className="horizontal-card-content">
                  <div className=" trend-card-title">
                    <h2>{item.title}</h2>
                  </div>
                  <p className="treding-card-text-content">
                    {item.description}
                  </p>
                  <h3>Trending in # {index + 1}</h3>
                  <Link to={`/Product/${item._id}`}>
                    <button className="btn trending-card-btn btn-link">
                      VIEW PRODUCT
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export { TrendingCard };
