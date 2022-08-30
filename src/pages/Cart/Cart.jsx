import React, { useEffect } from "react";
import { NavBar } from "../HomePage/HomePageComponents";
import "../../Colours/colours.css";
import CartCSS from "../Cart/Cart.module.css";
import { CartProduct } from "../Cart/CartProduct";
import { useCart } from "../../contexts/cartContext";
import EmptyCartImage from "../Cart/empty-cart.png";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../../contexts/wishlistContext";
// import { Modal } from "../../pages/Modal";
import { toast } from "react-toastify";
function Cart() {
  const {
    cart,
    total,
    amount,
    listedPriceTotal,
    discountPriceTotal,
    dispatch,
  } = useCart();
  const { isWishlistModalOpen, wishlistDispatch } = useWishlist();

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const displayRazorpay = async (amount) => {
    console.log(" razorpay to be Displayed");
    const response = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!response) {
      toast.warning("you are Offline 😢", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    const options = {
      key: "rzp_test_I09NM8PpgOnIY7",
      currency: "INR",
      amount: amount * 100,
      name: "Daily fashion INC",
      Description: "Thanks for shopping",
      handler: function (response) {
        dispatch({ type: "PAYMENT_DONE" });
        // alert(response.razorpay_payment_id);
        toast.success("payment Successfull", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const navigate = useNavigate();
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
            <div className={CartCSS["empty-cart"]}>
              <h2>
                IS EMPTY😢 <br /> GO AND ADD ITEMS
              </h2>

              <img
                className={CartCSS["empty-cart-image"]}
                src={EmptyCartImage}
                alt=""
              />
              <button
                className={CartCSS["explore-btn"]}
                onClick={() => {
                  navigate("/ProductList");
                }}
              >
                EXPLORE
              </button>
            </div>
          ) : (
            <div className={`card ${CartCSS["cart-price-detail-card"]}`}>
              <div className={CartCSS["price-card-title"]}>
                <h2 className="header-small">PRICE DETAILS</h2>
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
                  <h3 className="header-semi-large">TOTAL AMOUNT:</h3>
                  <h2 className="header-semi-large">Rs.{total + 100}/-</h2>
                </div>
                <hr />
                <div className={CartCSS["money-save-text"]}>
                  <h2>
                    You will save{" "}
                    <span
                      className={`header-text ${CartCSS["saved-price"]} header-semi-large`}
                    >
                      Rs.{discountPriceTotal}/-
                    </span>{" "}
                    on this order
                  </h2>
                </div>
              </div>

              <button
                className={`btn btn-primary ${CartCSS["place-order-btn"]}`}
                onClick={() => {
                  displayRazorpay(total + 100);
                }}
              >
                PLACE ORDER
              </button>
            </div>
          )}
        </div>
      </div>
      {/* {is} */}
      {/* {isWishlistModalOpen && <Modal />} */}
    </div>
  );
}

export { Cart };
