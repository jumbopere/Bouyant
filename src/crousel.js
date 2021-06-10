import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import Team from './team';

export default class DivCarousel extends Component {
    render() {
        return (
            <Carousel 
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showArrows={false} 
                    showStatus={false}
                    className="presentation-mode"
                    style = {{color: 'white'}}
            >
                <div className="my-slide">
                    <Team customer='1' name='Emmanuel' 
                    comment="MD of BOUYANT IDEAL LTD"/>
                </div>
                <div className="my-slide">
                    <Team customer='2' name='M' 
                    comment="Manger of BOUYANT IDEAL LTD"/>
                </div>
                <div className="my-slide">
                    <Team customer='3' name='Geraldine Seydoux' 
                        comment="Accountant of BOUYANT IDEAL LTD"/>
                </div>
                <div className="my-slide">
                    <Team customer='3' name='Geraldine Seydoux' 
                        comment="Staff of BOUYANT IDEAL LTD"/>
                </div>
                <div className="my-slide">
                    <Team customer='3' name='Geraldine Seydoux' 
                        comment="Staff of BOUYANT IDEAL LTD"/>
                </div>
            </Carousel>
        );
    }
}
 