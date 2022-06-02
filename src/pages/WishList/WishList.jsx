import React from "react";
import { NavBar } from "../HomePage/HomePageComponents/NavBar/NavBar";
import { wishlistItems } from "../../backend/db/wishlist-items";
import "../WishList/Wishlist.css";
import { WishlistProductCard } from "../WishList/WishlistProductCard";
function WishList() {
  return (
    <div>
      <NavBar />
      <div className="wishlist-container">
        <h1 className="header-large wishlist-heading">My Wishlist</h1>
        <div className="wishlist-items-row">
          {wishlistItems.map((item) => {
            return <WishlistProductCard key={item._id} {...item} />;
          })}
        </div>
      </div>
    </div>
  );
}

export { WishList };
