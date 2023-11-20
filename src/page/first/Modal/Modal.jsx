import React from "react";
import "../../../style/Modal.css";
const Modal = ({ setActive }) => {
  return (
    <div className="modal" onClick={() => setActive(false)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <input type="text" placeholder="name" />
        <input type="email" placeholder="email" />
      </div>
    </div>
  );
};

export default Modal;
