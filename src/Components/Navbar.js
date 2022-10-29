import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../Context';

const Navbar = () => {
  const {cart} = useContext(CartContext)
  return (
    <div className='navbar'>
        <img src="https://img.freepik.com/premium-vector/sneakers-shoe-logo-design-vector-illustration-trending-youth-footwear-simple-funky-concept_557439-2032.jpg?w=2000" style={{objectFit:"contain" , height:"120px"}}/>
        <h1 className='logo_heading'>SHOES CART</h1>
        <ul>
           <Link style={{textDecoration:"none",color:"black"}} to="/"><li>Home</li></Link> 
           <Link style={{textDecoration:"none",color:"black"}} to="/cart"><li>Cart({cart.length})</li></Link> 
        </ul>
    </div>
  )
}

export default Navbar