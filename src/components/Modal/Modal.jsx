import React from "react"
import "../Modal/Modal.scss"

const ModalComponent = ({
    isOpen,
    onRequestClose,
    onConfirm,
    onCancel,
    message,
    confirmText,
    cancelText
  }) => {
    if (!isOpen) return null;
  
    return (
      <div className="modal-overlay">
        <div className="modal-content">
          <section className="modal-sections">
            <p>{message}</p>
          </section>
          <section className="modal-sections">
            <button className="modal-button" onClick={onConfirm}>{confirmText}</button>
            <button className="modal-button" onClick={onCancel}>{cancelText}</button>
          </section>
        </div>
        {/* <div className="modal-background" onClick={onRequestClose} /> */}
      </div>
    );
  };
  
  export default ModalComponent;
