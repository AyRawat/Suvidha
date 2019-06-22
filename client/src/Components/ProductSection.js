import React from 'react'
import { useState } from 'react';
import { Redirect } from 'react-router';




const ProductSection = ({product}) => {
//Promise
     function renderRedirect(){
         
        if(red.redirect){
            return <Redirect to={ {
                pathname: '/productcategory',
                search: '?query=product_dep',
                state: {
                    sec_id: red.sec_id ,
                    name: red.name,
                    dep_id: red.dep_id
                    }
            } }   
             />
        }
    }
   const [ red , setRed] = useState([
       {redirect : false,
        sec_id:' ',
        name: ' ',
       dep_id: ' '}
   ])

   const setRedirect = (id)=>{
        setRed({
            redirect:true,
            sec_id: id.grocery_section_id,
            name: id.grocery_section_name,
            dep_id: product.grocery_division_id
            
        })
   }
   
  
   
   
    return (
        
        <div key ={product.grocery_division_id} id ={product.grocery_division_id}>
            <div className ="row">
            <div class="col s6 m3 l4">
                <div className= "btn btn-floating"><img src = "{product.grocery_division_image}" alt={product.grocery_division_name}/></div>
                <h3>{product.grocery_division_name}</h3>
            </div>
            </div>
             {product.sections.map(id=>{
                 return(
                     
                     <div className="row">
                         <div className="col s12 m4 l4 " >
                             <div className="card " id = {id.grocery_section_id} key = {id.grocery_section_id} >
                                 <div className="card-image">
                                     <img src={id.grocery_section_image} alt={id.grocery_section_name}/>
                                 </div>
                                 <div className="card-content">{id.grocery_section_name}</div>
                                
                                 <button id={id}  value={id.grocery_section_name}className = "btn green" onClick={()=>{setRedirect(id)}}>Click</button>                                
                                 {renderRedirect()}
                             </div>
                         </div>
                   
              </div>
              
                 )})}
        </div>
        
    )
                 }
 
export default ProductSection