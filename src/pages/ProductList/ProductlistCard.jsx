import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../contexts/cartContext";
import { useWishlist } from "../../contexts/wishlistContext";
import { HiShoppingCart } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
function ProductlistCard({
  _id,
  title,
  imageSource,
  listedPrice,
  sellingPrice,
  rating,
  inStock,
  amount,
}) {
  const calculateDiscount = (initialPrice, sellingPrice) => {
    return ((initialPrice - sellingPrice) / initialPrice) * 100;
  };
  const { dispatch, cart } = useCart();
  const { wishlistDispatch, wishlist, dislike } = useWishlist();
  return (
    <div className="card badge-card">
      <div className="label-icon ">
        <div className="label">NEW</div>

        {wishlist.some((item) => item.id === _id) ? (
          <i
            onClick={() => dislike(_id)}
            className="fa fa-heart fa-2x liked-heart "
            aria-hidden="true"
          ></i>
        ) : (
          <i
            onClick={() => {
              wishlistDispatch({
                type: "ADD_TO_WISHLIST",
                item: {
                  id: _id,
                  title: title,
                  imageSource: imageSource,
                  listedPrice: listedPrice,
                  sellingPrice: sellingPrice,
                  rating: rating,
                  instock: inStock,
                  amount: amount,
                },
              });
            }}
            className="fa fa-heart fa-2x heart-icon "
            aria-hidden="true"
          ></i>
        )}
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
      {cart.some((item) => item.id === _id) ? (
        <Link className="nav-icon-link" to="/Cart">
          <button className="btn outline-primary card-button">
            GO TO CART <BsArrowRight />
          </button>
        </Link>
      ) : (
        <button
          className="btn btn-link card-button"
          onClick={() => {
            dispatch({
              type: "ADD_TO_CART",
              item: {
                id: _id,
                title: title,
                imageSource: imageSource,
                listedPrice: listedPrice,
                sellingPrice: sellingPrice,
                rating: rating,
                instock: inStock,
                amount: amount,
              },
            });
          }}
        >
          <HiShoppingCart /> ADD TO CART
        </button>
      )}
    </div>
  );
}

export { ProductlistCard };
