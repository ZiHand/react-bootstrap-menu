import React, { useContext } from 'react';
import { GlobalContext } from './../context/globalContext';
import Modal from './Modal';

const MealCard = (meal) => 
{
    const {modalState, toggleModal} = useContext(GlobalContext);
    const {title, picture, alt, text} = meal.element;

    const openModal = () => 
    {
        toggleModal("open", meal.element);
    };

    return (
        <>
        <div className="col-md-4 col-sm-6">
            <div className="card mb-4 shadow-sm">
                <img src={picture} alt={alt} className="w-100 rounded"/>
                <div className="card-body">
                    <h2 className="display-6 text-center">{title}</h2>
                    <p className="card-text">{text}</p>
                    <div className="btn-group">
                        {!modalState && 
                            <button type="button" className="btn btn-sm btn-outline-secondary" onClick={() => openModal()}>Decouvrir</button>
                        }
                        
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MealCard;