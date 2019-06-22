import React, { Component } from 'react'
import GooglePlay from '../GooglePlay.png';
export class SectionThree extends Component {
    render() {
        return (
            <div className="row">
                 <h3 className="col s12 m12 l12 center orange-text text-darken-3">Welcome to Suvidha Supermarket Online Grocery Store</h3>
                  <h5 className = "col s12 m12 l12 center blue-text text-darken-2">Download the Suvidha Supermarket Online Grocery App</h5>
                  <img className = "col s4 m4 l4 offset-s4 offset-m4 offset-l4"src={GooglePlay} alt=""/>
                  <div className="divider"></div>
            </div>
        )
    }
}

export default SectionThree
