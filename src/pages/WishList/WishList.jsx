import React from "react";
import { Modal } from "../Modal";
import { NavBar } from "../HomePage/HomePageComponents/NavBar/NavBar";
import "../WishList/Wishlist.css";
import { WishlistProductCard } from "../WishList/WishlistProductCard";
import { useWishlist } from "../../contexts/wishlistContext";
import { useCart } from "../../contexts/cartContext";
import EmptyWishlistImage from "../WishList/empty-wishlist.png";
function WishList() {
  const { wishlist } = useWishlist();
  const { isModalOpen, dispatch } = useCart();
  setTimeout(() => {
    dispatch({ type: "REMOVE_MODAL" });
  }, 6000);       
  return (
    <div>
      <NavBar />
      <div className="wishlist-container">
        {wishlist.length === 0 ? (
          <div>
            <h2> WISHLIST IS EMPTY, PLEASE ADD ITEMS OF YOUR WISH 😎</h2>
            <img className="wishlist-image" src={EmptyWishlistImage} alt="" />
          </div>
        ) : (
          <div>
            <h1 className="header-large wishlist-heading"> Wishlist</h1>
            <div className="wishlist-items-row">
              {wishlist.map((item) => {
                return <WishlistProductCard key={item.id} {...item} />;
              })}
            </div>
          </div>
        )}
      </div>
      {isModalOpen && <Modal />}
    </div>
  );
}

export { WishList };
