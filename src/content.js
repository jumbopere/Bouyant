import React, { Component } from 'react';

import './App.css';
import ProductDetail from './ProductDetail';
import NavButton from './Button';
import DivCarousel from './Crousel';


export default class Content extends Component {
    render() {
        return (
            <div className="content">
                {/* Link Anchor */}
                <section id='content'></section>
                <div className="slide1">
                    <span style={{ fontSize: '150px', lineHeight: '0.6em', opacity: '0.2', userSelect: 'none' }}>&#10077;</span>
                    <h1>We Are:</h1>
                    <p data-delighter="start:0.5;" >
                        Bouyant Ideal LTD, Supplier and Exporter of agricultural products like:<br />
                      Salted Beef Omasum, Beef Pizzles, Beef Tail, Beef Tongue, Cow Horns, Cow Skin, Bitter Kola etc.
                    </p>
                </div>

              {/*   <div className="slide2" style ={{color: "white"}} >
                    <h1>Products</h1>
                    <p></p>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <ProductDetail name="Cow Horn" item="horn"  />
                        <ProductDetail name="Salted Omasum" item="bf"  />
                        <ProductDetail name="Cow Skin" item="af"  />
                        <ProductDetail name="BitterKola" item="Bitterkola"  />

                    </div>
                    <div style={{ textAlign: "center" }}>
                        <NavButton link='./products' title='Check out more of our products' />
                    </div>
                </div>*/}

               {/* <div className="slide3">
                    <h1>Our Team</h1>
                    <DivCarousel />
        </div>*/}

                <div className="slide4">
                    <h1>Contact</h1>
                    <div className="contact">
                        <h3>Reach Us At</h3>
                        <p>  Gacoun Plaza, Opp. K Close, 23 Road, Festac Town,Lagos<br /> +234(0)8100895033<br />
                +234(0)7032968184</p>
                        <h3>Open Hours</h3>
                        <p>
                            Monday-Friday: 8:00AM - 3:00PM<br />
                            *Closed for weekends and holidays.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}