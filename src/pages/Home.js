import React from 'react';
import MealCard from './../components/MealCard';

let meals = 
[
    {
        picture: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
        alt: "detail du plat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nam id unde minus nihil, necessitatibus veniam soluta quos obcaecati sapiente!"
    },
    {
        picture: "https://images.unsplash.com/photo-1607301405418-780ee5e6dd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
        alt: "detail du plat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nam id unde minus nihil, necessitatibus veniam soluta quos obcaecati sapiente!"
    },
    {
        picture: "https://images.unsplash.com/photo-1607301405418-780ee5e6dd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
        alt: "detail du plat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nam id unde minus nihil, necessitatibus veniam soluta quos obcaecati sapiente!"
    },
    {
        picture: "https://images.unsplash.com/photo-1607301405418-780ee5e6dd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
        alt: "detail du plat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nam id unde minus nihil, necessitatibus veniam soluta quos obcaecati sapiente!"
    },
    {
        picture: "https://images.unsplash.com/photo-1607301405418-780ee5e6dd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
        alt: "detail du plat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nam id unde minus nihil, necessitatibus veniam soluta quos obcaecati sapiente!"
    },
    {
        picture: "https://images.unsplash.com/photo-1607301405418-780ee5e6dd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
        alt: "detail du plat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nam id unde minus nihil, necessitatibus veniam soluta quos obcaecati sapiente!"
    },
    {
        picture: "https://images.unsplash.com/photo-1607301405418-780ee5e6dd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
        alt: "detail du plat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nam id unde minus nihil, necessitatibus veniam soluta quos obcaecati sapiente!"
    },
    {
        picture: "https://images.unsplash.com/photo-1607301405418-780ee5e6dd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
        alt: "detail du plat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nam id unde minus nihil, necessitatibus veniam soluta quos obcaecati sapiente!"
    },
    {
        picture: "https://images.unsplash.com/photo-1607301405418-780ee5e6dd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80",
        alt: "detail du plat",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi nam id unde minus nihil, necessitatibus veniam soluta quos obcaecati sapiente!"
    },
    
  ];

function RenderModal()
{
     // Modal markup: https://getbootstrap.com/docs/4.4/components/modal/
     return (
         <>
        <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">X</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src="../../../public/img/sheldon-liu.webp" class="img-responsive" style="width: 100%;"></img>
                    </div>

                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};

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
                    meals.map( (element) => 
                    {
                        return <MealCard img_url={element.picture} img_alt={element.alt} text={element.text}/>
                    })
                }
            </div>
        </div>
        {/* <div id="myModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-body">
                            <img src="https://images.unsplash.com/photo-1607301405418-780ee5e6dd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80" alt="test" class="img-responsive"></img>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    );
};

export default Home;