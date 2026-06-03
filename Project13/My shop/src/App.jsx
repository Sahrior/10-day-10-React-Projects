import React from 'react'
import products from "./data/products.js";
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';


const App = () => {
  return (
    <div>

      <Navbar/>

      

      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/cart' element={ <Cart/> } />
        <Route path='/contact' element={ <Contact/> } />
      </Routes>
      
    </div>
  )
}

export default App
