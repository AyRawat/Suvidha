import React, { Component } from 'react';
import DemoCaro from '../Components/DemoCaro'


export class SectionOne extends Component {
    render() {
       return(
           <div className="row">
               <div className="left col s6 m6 l6">
                   <h3 className=" blue-text text-darken-2">TRENDING OFFERS</h3>
                   </div>
           <DemoCaro/>
           </div>
       
       )
    }
}


document.querySelector('DemoCaro');
export default SectionOne
