import React, { Component } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import one from '../shopping.jpeg';
import two from '../shopping2.jpeg';
import three from '../shopping3.jpeg';
import four from '../shopping4.jpeg';
import five from '../shopping5.jpeg';

export class DemoCaro extends Component {
    render() {
        return (
            <Carousel centerMode={true} showStatus={false} showThumbs={false}>
                <div>
                    <img src={one} alt="on" />
                    <p className="legend">first</p>
                </div>
                <div>
                    <img src={two} alt="two"/>
                    <p className="legend">Second</p>
                </div>
                <div>
                    <img src={three} alt="three" />
                    <p className="legend">Third</p>
                </div>
                <div>
                    <img src={four} alt="four" />
                    <p className="legend">Third</p>
                </div>
                <div>
                    <img src={five} alt="five"/>
                    <p className="legend">Third</p>
                </div>
            </Carousel>
        )
    }
}
document.querySelector('DemoCaro');
export default DemoCaro
