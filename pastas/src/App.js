import React from 'react';
import './App.css';
import Navbar from './Components/Components/Nav/Navbar';
import Order from './Components/Views/Order/Order';
import Cart from "./Components/Views/CartProducts/Cart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Components/Views/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/order' exact element={<Order/>}/>
          <Route path='/cart' exact element={<Cart/>}/>    
        </Routes>
    </BrowserRouter>
  );
}

export default App;
