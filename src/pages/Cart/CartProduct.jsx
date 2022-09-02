import React from "react";
import "../../Colours/colours.css";
import CartCSS from "../Cart/Cart.module.css";
import { IoMdArrowDropupCircle, IoMdArrowDropdownCircle } from "react-icons/io";
import { useCart } from "../../contexts/cartContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ADD_TO_WISHLIST } from "../../constants/wishlistStateConstants";
function CartProduct({
  imageSource,
  title,
  listedPrice,
  sellingPrice,
  id,
  amount,
}) {
  const calculateDiscount = (initialPrice, sellingPrice) => {
    return ((initialPrice - sellingPrice) / initialPrice) * 100;
  };
  const { remove, increase, decrease } = useCart();
  const { wishlistDispatch, wishlist } = useWishlist();

  return (
    <div className="horizontal-card">
      <div className="horizontal-card-image-container">
        <Link className={CartCSS["cart-link-image"]} to={`/Product/${id}`}>
          <img
            className={`horizontal-card-image ${CartCSS["cart-product-image"]}`}
            src={imageSource}
          />
        </Link>
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
          <span>
            <strong>Quantity:</strong>
          </span>
          <div className={CartCSS["quantity-group"]}>
            <IoMdArrowDropdownCircle
              className={CartCSS["btn-counter"]}
              onClick={() => decrease(id)}
            />
            <span>
              <strong>{amount}</strong>
            </span>

            <IoMdArrowDropupCircle
              className={CartCSS["btn-counter"]}
              onClick={() => increase(id)}
            />
          </div>
        </div>
        <div className={CartCSS["cart-card-buttons"]}>
          <button
            className={`btn btn-primary ${CartCSS["cart-card-button"]} ${CartCSS["remove-btn"]}`}
            onClick={() => {
              remove(id);
            }}
          >
            Remove from cart
          </button>
          <button
            className={`btn btn-primary ${CartCSS["cart-card-button"]}`}
            onClick={() => {
              if (wishlist.some((item) => item.id === id)) {
                toast.info("Item already exists in  Wishlist", {
                  position: "bottom-center",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              } else {
                wishlistDispatch({
                  type: ADD_TO_WISHLIST,
                  item: {
                    id: id,
                    title: title,
                    imageSource: imageSource,
                    listedPrice: listedPrice,
                    sellingPrice: sellingPrice,
                    amount: amount,
                  },
                });
                toast.info("Item added to  Wishlist", {
                  position: "bottom-center",
                  autoClose: 3000,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                });
              }
            }}
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
}

export { CartProduct };
