import React from 'react';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Modal from './../components/Modal';

const Index = () => 
{
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/contact" exact element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Index;