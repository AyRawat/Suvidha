import React from 'react'
import {withRouter, Redirect} from 'react-router-dom';
import {useState} from 'react';

 function ProductDep({product}) {
    function renderRedirect(){
        if(cart.redirect){
            return <Redirect to={{
                pathname: '/Cart',
                search:'?query=Cart',
                state:{
                    name: cart.name,
                    id: cart.id,
                }
            }}/>
        }
    }
const [cart , toCart] = useState([
    {
        name: '',
        id: ' ',
        redirect: false
    }
])
const showCart = (product)=>{
  toCart({
      name: product.name,
      id: product.id,
      redirect: true
  })
}



    return (
        
            <div className="row">
            
                         <div className="col s12 m4 l4 " >
                             <div className="card " id = {product.id} key = {product.id} >
                                 <div className="card-image">
                                     <img src={product.image} alt={product.name}/>
                                 </div>

                                 <div className="card-content">{product.name}</div>
                                 <div className="row">
                                    <label className="col s4 m4 l4 black-text"> mrp </label><div className="col s2 m2 l2">{product.mrp}</div>
                                    <label className="col s4 m4 l4 black-text"> rsp </label><div className="col s2 m2 l2">{product.rsp}</div>
                                 </div>
                                 <div className="container">
                                 <div className="row">                                     
                                 <button className="col s4 m5 l5  btn  waves-effect waves-light" onClick={()=>{showCart(product)}} >Buy</button>
                                {renderRedirect()}
                                 </div>
                                 </div>
                             </div>
                         </div>
                   
              </div>
       
    )
}
export default withRouter(ProductDep)