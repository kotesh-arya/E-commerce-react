import React from "react";
import { useCart } from "../../contexts/cartContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { MOVE_TO_CART } from "../../constants/cartStateConstants";
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
        <Link to={`/Product/${id}`}>
          <img className="card-image" src={imageSource} />
        </Link>
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
              toast.info("Item already exists in Cart", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              });
            } else {
              removeFromWishlist(id);
              dispatch({
                type: MOVE_TO_CART,
                item: {
                  id: id,
                  title: title,
                  imageSource: imageSource,
                  listedPrice: listedPrice,
                  sellingPrice: sellingPrice,
                  amount: amount,
                },
              });
              toast.info("Item moved to Cart", {
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
          className="btn btn-link wishlist-card-button"
        >
          MOVE TO CART
        </button>
        <button
          onClick={() => {
            removeFromWishlist(id);
            toast.info("Item removed from Wishlist", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
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
