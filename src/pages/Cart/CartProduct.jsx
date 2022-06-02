import React from "react";
import "../../Colours/colours.css";
import CartCSS from "../Cart/Cart.module.css";
function CartProduct({ imageSource, title, listedPrice, sellingPrice }) {
  const calculateDiscount = (initialPrice, sellingPrice) => {
    return ((initialPrice - sellingPrice) / initialPrice) * 100;
  };
  return (
    <div className="horizontal-card">
      <div className="horizontal-card-image-container">
        <img
          className={`horizontal-card-image ${CartCSS["cart-product-image"]}`}
          src={imageSource}
        />
      </div>
      <div className="horizontal-card-content">
        <div className=" cart-card-title">
          <h2 className={`header-text ${CartCSS["cart-item-title"]}`}>
            {title}
          </h2>
        </div>
        <div className={`card-content ${CartCSS["price"]}`}>
          <h2>
            Rs.{sellingPrice}{" "}
            <strike>
              <span className={CartCSS["light-text"]}>Rs.{listedPrice}</span>
            </strike>{" "}
          </h2>
          <h3>
            ({Math.round(calculateDiscount(listedPrice, sellingPrice))}% OFF)
          </h3>
        </div>
        <div className={CartCSS["quantity-setting"]}>
          <p>Quantity:</p>
          <button className={CartCSS["btn-counter"]}>-</button>
          <input className={CartCSS["quantity-input"]} type="text" />
          <button className={CartCSS["btn-counter"]}>+</button>
        </div>
        <div className={CartCSS["cart-card-buttons"]}>
          <button
            className={`btn btn-primary ${CartCSS["cart-card-button"]} ${CartCSS["remove-btn"]}`}
          >
            Remove from cart
          </button>
          <button className={`btn btn-primary ${CartCSS["cart-card-button"]}`}>
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export { CartProduct };
