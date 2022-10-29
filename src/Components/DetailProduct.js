import React,{useState,useContext} from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../Context';
import Data from '../Data';

const DetailProduct = () => {
    const  {id} = useParams();
    const {cart,setCart} = useContext(CartContext);
    
    const detailProduct = Data[id-1];
    const handleBuynow =()=>{
      if(!cart.includes(detailProduct)){
        setCart([...cart,detailProduct])
      }
    }
   
  return (
    <div className='detail__product'>
      <img src={detailProduct.url} className='detail__productImage' />
      <div className='detail__content'>
      <h1 className='detail__name'>{detailProduct.name}</h1>
      <h1 className='detail__price'>Price : ${detailProduct.price}</h1>
      <button className='detail__button' onClick={handleBuynow}>BUY NOW</button>
      </div>
    </div>
  )
}

export default DetailProduct