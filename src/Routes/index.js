import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from '../pages/Aboutus.js';
import Contact from '../pages/Contactus.js';
import Details from '../pages/Details.js';
import List from '../pages/Listproduct.js';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';
import AddToCart from '../pages/AddToCard.js';
import Counter from '../pages/counter.js';



function Routers() {
  return (
    <Routes>
        <Route path='/' element={<List />}/>
        <Route path='/details/:id' element={<Details />}/>
        <Route path='/about-Us' element={<About />}/>
        <Route path='/contact-Us' element={<Contact />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/register' element={<Register />}/>
        <Route path='/add-to-card' element={<AddToCart />}/>
        <Route path='/counter' element={<Counter />}/>
        <Route path="*" element={<h1>Not found page</h1>} />
    </Routes>

  );
}

export default Routers;
