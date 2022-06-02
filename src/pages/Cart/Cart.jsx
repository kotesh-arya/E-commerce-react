import React from "react";
import { NavBar } from "../HomePage/HomePageComponents";
import "../../Colours/colours.css";
import CartCSS from "../Cart/Cart.module.css";
import { cartItems } from "../../backend/db/cart-items";
import { CartProduct } from "../Cart/CartProduct";
function Cart() {
  return (
    <div>
      <NavBar />

      <div className={CartCSS["cart-container"]}>
        <h1 className="cart-header">My Cart</h1>
        <div className={CartCSS["item-price-container-row"]}>
          <div className={CartCSS["cards-container-col"]}>
            {cartItems.map((item) => {
              return <CartProduct key={item._id} {...item} />;
            })}
          </div>

          <div className={`card ${CartCSS["cart-price-detail-card"]}`}>
            <div className={CartCSS["price-card-title"]}>
              <h1 className="header-small">PRICE DETAILS</h1>
            </div>
            <hr />
            <div className="card-content">
              <div className={CartCSS["price-calculation-container"]}>
                <ul className={CartCSS["text"]}>
                  <li className={CartCSS["price-card-item"]}>
                    Price (2 Items)
                  </li>
                  <li className={CartCSS["price-card-item"]}>Discount</li>
                  <li className={CartCSS["price-card-item"]}>
                    Delivery charges
                  </li>
                </ul>
                <ul className={CartCSS["charges"]}>
                  <li className={CartCSS["price-card-item"]}>Rs.4000/-</li>
                  <li className={CartCSS["price-card-item"]}>-Rs.1500/-</li>
                  <li className={CartCSS["price-card-item"]}> Rs.100/-</li>
                </ul>
              </div>
              <hr />
              <div className={CartCSS["final-price"]}>
                <h2 className="header-semi-large">TOTAL AMOUNT:</h2>
                <h2 className="header-semi-large">Rs.2600/-</h2>
              </div>
              <hr />
              <div className={CartCSS["money-save-text"]}>
                <h2>
                  You will save{" "}
                  <span className="header-text header-semi-large">
                    Rs.1500/-
                  </span>{" "}
                  on this order
                </h2>
              </div>
            </div>

            <button className={`btn btn-primary ${CartCSS["place-order-btn"]}`}>
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Cart };
