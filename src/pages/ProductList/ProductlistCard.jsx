import React from "react";
function ProductlistCard({ title, imageSource, listedPrice, sellingPrice }) {
  const calculateDiscount = (initialPrice, sellingPrice) => {
    return ((initialPrice - sellingPrice) / initialPrice) * 100;
  };

  return (
    <div className="card badge-card">
      <div className="label-icon ">
        <div className="label">NEW</div>
        <img
          src="https://img.icons8.com/ios-glyphs/60/fa314a/like--v1.png"
          className="stacked-icon"
          alt="like-heart"
        />
      </div>

      <div className="card-image-container">
        <img className="card-image" src={imageSource} />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>

        <span className="price">
          Rs.{sellingPrice} <strike>Rs.{listedPrice}</strike>{" "}
        </span>
        <span className="discount">
          ({Math.round(calculateDiscount(listedPrice, sellingPrice))}% OFF){" "}
        </span>
      </div>
      <button className="btn btn-link card-button">ADD TO CART</button>
    </div>
  );
}

export { ProductlistCard };
