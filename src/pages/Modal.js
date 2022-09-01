import React from "react";
import "../pages/Modal.css";
import { useCart } from "../contexts/cartContext";
import { useWishlist } from "../contexts/wishlistContext";
function Modal() {
  const { cartModalContent } = useCart();
  const { wishlistModalContent } = useWishlist();
  return (
    <div className="modal-container animate__animated animate__fadeInUp animate__slow">
      {cartModalContent && <h4>{cartModalContent}</h4>}
      {wishlistModalContent && <h4>{wishlistModalContent}</h4>}
    </div>
  );
}

export { Modal };
