import React, { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

const Modal = () => {
  const { mealState, modalState, toggleModal } = useContext(GlobalContext);

  const closeModal = () => {
    toggleModal("close", null);
  };

  return (
    <>
      {modalState && (
        <div className="modal_div position-fixed top-0 vw-100 vh-100">
          {/* Overlay */}
          <div className="w-100 h-100 bg-dark " onClick={() => closeModal()}>
            {/* The modal container*/}
            <div
              className="modal_container position-absolute top-50 start-50 translate-middle"
              style={{ minWidth: "300px" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{mealState.title}</h5>
                    <button
                      className="btn-close"
                      onClick={() => closeModal()}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <img
                      className="modal_picture"
                      src={mealState.picture}
                      alt={mealState.alt}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
