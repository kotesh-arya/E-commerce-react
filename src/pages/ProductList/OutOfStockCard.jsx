import React from "react";
function OutOfStockCard({
  title,
  imageSource,
  listedPrice,
  sellingPrice,
  rating,

}) {
  const calculateDiscount = (initialPrice, sellingPrice) => {
    return ((initialPrice - sellingPrice) / initialPrice) * 100;
  };

  return (
    <div className="card text-overlay-card ">
      <div className=" absolute-positioned-text">
        <h1>OUT OF STOCK</h1>
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

export { OutOfStockCard };
