import React from 'react';
import MealCard from './../components/MealCard';
import {meals} from '../mealDatas';
import Modal from './../components/Modal';



const Home = () => 
{
    return (
        <>
        
        <section className="acceuil bg-dark d-flex w-100 h-50 flex-column justify-content-center align-items-center">
            <div className="container p_container d-flex  flex-column justify-content-center align-items-center rounded p-3 m-5">
                <h1 className='display-1 text-light text-center'>Home</h1>
                <p className='lead text-center text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut nobis nesciunt suscipit vel quam consectetur consequuntur nemo.</p>
            </div>
        </section>
        <div className="container py-5 bg-dark">
            <h2 className="display-6 text-light text-center mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <div className="row ">
                {
                    meals.map( (element, index) => 
                    {
                        return <MealCard element={element} key={index}/>
                    })
                }
            </div>
        </div>
        <Modal />
        </>
    );
};

export default Home;