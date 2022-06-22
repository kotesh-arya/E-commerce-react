import React from "react";
import "../pages/Modal.css";
import { GlobalCartContext } from "../contexts/cartContext";
function Modal() {
  const { modalContent } = GlobalCartContext();
  return (
    <div className="modal-container animate__animated animate__fadeInUp animate__slow">
      <h4>{modalContent}</h4>
    </div>
  );
}

export { Modal };
