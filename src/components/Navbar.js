import React from 'react';
import {useEffect, useState} from 'react';

const Navbar = () => 
{
    // Used to show the actual active page
    const [activePage, setactivePage]   = useState("/");

    // ================================
    // useEffect
    // ================================
    useEffect(() => 
    {
        setactivePage(window.location.pathname);
    }, [activePage])

    // ================================
    // Rendering
    // ================================
    return (
        <header className="App-header" role="navigation">
            <nav className="nav  bg-dark bg-gradient justify-content-center">
                <a href="/" className={`nav-item nav-link link-light ${activePage === "/" ? "border-bottom" : ""}`} title='Acceuil' >Acceuil</a>
                <a href="/contact" className={`nav-item nav-link link-light ${activePage === "/contact" ? "border-bottom" : ""}`} title='Contacts'>Contacts</a>
            </nav>
        </header>
    );
};

export default Navbar;