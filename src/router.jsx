import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login/login';
import Register from './pages/register/register';
import Home from './pages/home/home';
import Detail from './pages/detail/detail';
import Navbar from './pages/navbar/navbar';

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            {/* <Route path='/detail' element={<Detail />} /> */}
            <Route path='/navbar' element={<Navbar />} />
            <Route path="/books/:id" element={<Detail />} />
            {/* <Route path="/edit-product/:id" element={<EditProduct />} /> */}
        </Routes>
    </BrowserRouter>
  );
}