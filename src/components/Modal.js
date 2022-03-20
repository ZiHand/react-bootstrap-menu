import React, {useContext} from 'react';
import { GlobalContext } from '../context/globalContext';

const Modal = () => 
{
    const {mealState, modalState, toggleModal} = useContext(GlobalContext);
    // const {picture, alt, text} = meal.meal.element;

    const picture = "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
    const alt = "";
    const text = "";


    const closeModal = () => 
    {
        toggleModal("close", null);
    };
    
    
    return (
        <>
        {modalState && (
        <div className="modal_div position-fixed top-0 vw-100 vh-100" >
            {/* Overlay */}
            <div className="w-100 h-100 bg-dark bg-opacity-15" onClick={() => closeModal()}>
                {/* The modal container*/}
                <div className="modal_container position-absolute top-50 start-50 translate-middle" style={{ minWidth: "400px" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{mealState.title}</h5>
                                <button className="btn-close" onClick={() => closeModal()}></button>
                            </div>
                            <div className="modal-body">
                                <img className='modal_picture' src={mealState.picture} alt={mealState.alt} />
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