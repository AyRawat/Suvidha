import React from 'react'
import ProductCard from '../Components/ProductCard';

export default function Sector({products}) {
   console.log(products);
    return (
        <div className="row">
            <div className="col s12 m6 l2 ">
               { products && products.map(product =>{
                  return(
                     <p>Hello</p>
                  )
               })}
               
            </div>
            
        </div>
    )
}
