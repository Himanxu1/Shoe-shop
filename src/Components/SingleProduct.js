import React from 'react';
import { Link } from 'react-router-dom';


const SingleProduct = ({item}) => {
 
  return (
    <Link className='product_container' to={`/product/${item.id}`} style={{textDecoration:"none",color:"black"}}>
       <img src={item.url} style={{objectFit:"contain",height:"200px"}} />
       <div className='product-content'>
        <h2 className='product_name'>{item.name}</h2>
        <h3 className='product_price'>${item.price}</h3>
       </div>
    </Link>
  )
}

export default SingleProduct