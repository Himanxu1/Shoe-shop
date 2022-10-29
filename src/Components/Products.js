import React,{useState} from 'react';
import Data from '../Data';
import SingleProduct from './SingleProduct';

const Products = () => {
    const [items,setItems] = useState(Data);
  
  return (
    <div className='products_container'>
        {items.map((item)=>{
            return <>
              <SingleProduct  item={item}/>
            </>
        })}
    </div>
  )
}

export default Products