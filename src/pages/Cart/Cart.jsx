import React from "react";
import { NavBar } from "../HomePage/HomePageComponents";
import "../../Colours/colours.css";
import CartCSS from "../Cart/Cart.module.css";
import { CartProduct } from "../Cart/CartProduct";
import { GlobalCartContext } from "../../contexts/cartContext";
import EmptyCartImage from "../Cart/empty-cart.png";
function Cart() {
  const { cart, total, amount, listedPriceTotal, discountPriceTotal } =
    GlobalCartContext();

  return (
    <div>
      <NavBar />

      <div className={CartCSS["cart-container"]}>
        <h1 className="cart-header">My Cart</h1>
        <div className={CartCSS["item-price-container-row"]}>
          <div className={CartCSS["cards-container-col"]}>
            {cart.map((item) => {
              return <CartProduct key={item.id} {...item} />;
            })}
          </div>

          {cart.length === 0 ? (
            <div>
              <h2>
                IS EMPTY😢 <br /> GO AND ADD ITEMS
              </h2>
              <img className={CartCSS["empty-cart-image"]} src={EmptyCartImage} alt="" />
            </div>
          ) : (
            <div className={`card ${CartCSS["cart-price-detail-card"]}`}>
              <div className={CartCSS["price-card-title"]}>
                <h1 className="header-small">PRICE DETAILS</h1>
              </div>
              <hr />
              <div className="card-content">
                <div className={CartCSS["price-calculation-container"]}>
                  <ul className={CartCSS["text"]}>
                    <li className={CartCSS["price-card-item"]}>
                      Price ({amount} Items)
                    </li>
                    <li className={CartCSS["price-card-item"]}>Discount</li>
                    <li className={CartCSS["price-card-item"]}>
                      Delivery charges
                    </li>
                  </ul>
                  <ul className={CartCSS["charges"]}>
                    <li className={CartCSS["price-card-item"]}>
                      Rs.{listedPriceTotal}/-
                    </li>
                    <li className={CartCSS["price-card-item"]}>
                      -Rs.{discountPriceTotal}/-
                    </li>
                    <li className={CartCSS["price-card-item"]}> Rs.100/-</li>
                  </ul>
                </div>
                <hr />
                <div className={CartCSS["final-price"]}>
                  <h2 className="header-semi-large">TOTAL AMOUNT:</h2>
                  <h2 className="header-semi-large">Rs.{total + 100}/-</h2>
                </div>
                <hr />
                <div className={CartCSS["money-save-text"]}>
                  <h2>
                    You will save{" "}
                    <span className="header-text header-semi-large">
                      Rs.{discountPriceTotal}/-
                    </span>{" "}
                    on this order
                  </h2>
                </div>
              </div>

              <button
                className={`btn btn-primary ${CartCSS["place-order-btn"]}`}
              >
                PLACE ORDER
              </button>
            </div>
          )}
          {/* <div className={`card ${CartCSS["cart-price-detail-card"]}`}>
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export { Cart };
