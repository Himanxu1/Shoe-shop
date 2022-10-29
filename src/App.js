import './App.css';
import Data from './Data';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './Components/Cart';
import DetailProduct from './Components/DetailProduct';

function App() {
  
  return (
    <div className="App">
         <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/product/:id' element={<DetailProduct/>}/>
    </Routes>
    </div>
  );
}

export default App;
