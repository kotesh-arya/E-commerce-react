import React from "react";
import "../pages/Modal.css";
import { useCart } from "../contexts/cartContext";
function Modal() {
  const { modalContent } = useCart();
  return (
    <div className="modal-container animate__animated animate__fadeInUp animate__slow">
      <h4>{modalContent}</h4>
    </div>
  );
}

export { Modal };
