import React from "react";
import { useCart } from "../../contexts/cartContext";
import { useWishlist } from "../../contexts/wishlistContext";

function WishlistProductCard({
  title,
  imageSource,
  listedPrice,
  sellingPrice,
  id,
  amount,
}) {
  const calculateDiscount = (initialPrice, sellingPrice) => {
    return ((initialPrice - sellingPrice) / initialPrice) * 100;
  };
  const { removeFromWishlist } = useWishlist();
  const { dispatch, cart } = useCart();
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
        <button
          onClick={() => {
            if (cart.some((item) => item.id === id)) {
              removeFromWishlist(id);
              dispatch({ type: "PRE_EXISTED_ITEM", payload: title });
            } else {
              removeFromWishlist(id);
              dispatch({
                type: "MOVE_TO_CART",
                item: {
                  id: id,
                  title: title,
                  imageSource: imageSource,
                  listedPrice: listedPrice,
                  sellingPrice: sellingPrice,
                  amount: amount,
                },
              });
            }
          }}
          className="btn btn-link wishlist-card-button"
        >
          MOVE TO CART
        </button>
        <button
          onClick={() => {
            removeFromWishlist(id);
          }}
          className="btn btn-link wishlist-card-button"
        >
          REMOVE
        </button>
      </div>
    </div>
  );
}

export { WishlistProductCard };
