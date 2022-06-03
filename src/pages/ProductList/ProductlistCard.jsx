import React from "react";
function ProductlistCard({
  title,
  imageSource,
  listedPrice,
  sellingPrice,
  rating,
  inStock
}) {
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
        <img className="card-image" src={imageSource} alt="watch" />
      </div>

      <div className="card-content">
        <div className="card-title">{title}</div>
        <div className="product-rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              <p key={index}>⭐</p>
            ))}
        </div>
        {!inStock && <h4> Out of Stock </h4>}
        <span className="price">
          Rs.{sellingPrice} <strike>Rs.{listedPrice}</strike>{" "}
        </span>
        <span className="discount">
          {" "}
          ({Math.round(calculateDiscount(listedPrice, sellingPrice))}% OFF){" "}
        </span>
      </div>
      <button className="btn btn-link card-button">ADD TO CART</button>
    </div>
  );
}

export { ProductlistCard };
