import React,{useContext, useEffect, useState} from 'react';
import { CartContext } from '../Context';
import {AiOutlinePlusSquare} from 'react-icons/ai';
import {AiOutlineMinusSquare} from 'react-icons/ai';
import {AiFillDelete} from 'react-icons/ai'

const Cart = () => {
  const {cart,setCart} = useContext(CartContext);
  const [total,setTotal] = useState(0);

  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc+Number(curr.price)*curr.quantity,0))
  },[cart])

  const handleDelete = (id)=>{
       setCart(cart.filter((item)=> item.id !== id))
  }
  const increment = (id)=>{
    const exist = cart.find(x => x.id === id)
    if(exist){
      setCart(cart.map(x => x.id ===id ? {...exist,quantity: exist.quantity+1} : x))
    }
  }

  const decrement = (id) =>{
    const exist = cart.find(x => x.id === id)
    if(exist && exist.quantity > 1){
      setCart(cart.map(x => x.id ===id ? {...exist,quantity: exist.quantity-1} : x))
    }
  }


    return (
    <div className='cart__container'>
    <div className='cart__products'>
     {cart.map((item)=>{
        return (
          <div className='cart__content'>
            <img src={item.url} className='cart__image' />
            <div className='cart_text'>
              <h1>{item.name}</h1>
              <h1>${item.price}</h1>
              <div className='quantity_btn'>
            <AiOutlinePlusSquare onClick={()=>increment(item.id)} style={{fontSize:"19px"}}/>
              <h1 style={{fontSize:"18px"}}>{item.quantity}</h1>
            <AiOutlineMinusSquare onClick={()=>decrement(item.id)} style={{fontSize:"19px"}}/>
             <AiFillDelete onClick={()=>handleDelete(item.id)} style={{fontSize:"22px",color:"red",marginLeft:"10px"}}/>
              </div>

            </div>
          </div>   
        )
      })}
    </div>
      <div className='total__container'>
        <div>
          {cart.map((item)=>{
            return (
              <div style={{display:"flex"}}>
              <p style={{marginRight:"10px"}}>{item.name}</p>
              <p>${item.price}x {item.quantity}</p>
              </div>
            )
          })}
          <div>
          <p className='total'>Total:${total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart