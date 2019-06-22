import React, { Component } from 'react'
import ProductSection from './ProductSection';

import axios from 'axios'

export class Products extends Component {
    constructor(props){
        super(props);
        this.state = {
            divname : [ ]
        }
    }
    componentDidMount(){
        const url = 'http://52.76.34.108:3000/api/grocery_items/drawer_items';
       
        axios.get( url).then(res=>{
         //console.log(res.data.payload.divisions);
        let division_name = res.data.payload.divisions.map( id => {
           //console.log(id.grocery_division_name);
          return (
              id
              )
        })
        this.setState({divname : division_name });

     }).catch((err)=>console.log("Can't Access URL"+ err))
    }


    render() {
        return (
            <div>
                {this.state.divname.map(id=>{

                    return(
                        <div>
                            <ProductSection product={id}/>
                        </div>

                    )
                })}

            </div>
        )
       }
}


export default Products ;
