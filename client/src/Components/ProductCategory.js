import React, { Component } from 'react'
import axios from 'axios';
import ProductDep from './ProductDep';

class ProductCategory extends Component {

    constructor(props){
        super(props);
        this.state={depname: []}
        
    }
     
      
     componentDidMount(){
         var url  = "http://52.76.34.108:3000//api/grocery_items?q[product_division_id_eq]="+this.props.location.state.dep_id+"&q[product_section_id_eq]="+this.props.location.state.sec_id+"&page=1"
         
         axios.get(url).then(res=>{
             let departmentname = res.data.payload.map( val =>{
                 return(
                     val
                 )
                })
                this.setState({depname : departmentname});
         })
     }
  
    render() {
    return (
        <div >
            <div className = "row">
                <div className="col s12 m4 l4">
                    <h3>{this.props.location.state.name}</h3>
                </div>
            </div>
            {this.state.depname.map( item=>{
                return(
                <ProductDep product = {item}/>
                )
            })}
         </div>
                   
        )
    }
}

export default ProductCategory