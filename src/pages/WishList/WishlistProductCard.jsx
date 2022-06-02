import React from "react";

function WishlistProductCard({
  title,
  imageSource,
  listedPrice,
  sellingPrice,
}) {
  const calculateDiscount = (initialPrice, sellingPrice) => {
    return ((initialPrice - sellingPrice) / initialPrice) * 100;
  };
  return (
    <div className="card badge-card">
      <div className="card-image-container">
        <img className="card-image" src={imageSource} />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>

        <span className="price">
          Rs.{sellingPrice} <strike>Rs.{listedPrice}</strike>{" "}
        </span>
        <span className="discount">
          {" "}
          ({Math.round(calculateDiscount(listedPrice, sellingPrice))}% OFF){" "}
        </span>
      </div>
      <div className="wishlist-card-footer">
        <button className="btn btn-link wishlist-card-button">
          MOVE TO CART
        </button>
        <button className="btn btn-link wishlist-card-button">REMOVE</button>
      </div>
    </div>
  );
}

export { WishlistProductCard };
