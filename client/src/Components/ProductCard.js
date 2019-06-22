import React from 'react'

const ProductCard = ({property , imge})=> {
return (
    
            <div className="shadow-2">
             <div className="row">
                 <div className="col s6 m4 l4 ">
                     <div className="card">
                 <div className="card-image">
                     <img src={imge.grocery_section_image} alt="shopim"/>
                     </div>
                     <div className="card-content">
                         <h6>{property.grocery_department_name}</h6>
                     </div>
                           
                 </div>
                 </div>
            </div>
            </div>
        )
    }
        


export default ProductCard
