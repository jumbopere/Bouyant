import React, { Component } from 'react';

import './App.css';
import ProductDetail from './productDetail';
import NavButton from './button';
import DivCarousel from './crousel';
import weare from './pictures/weare.jpg'

export default class Content extends Component{
    render(){
        return(
            <div className="content">
                {/* Link Anchor */}
                <section id='content'></section>
                <div className="slide1">
                    <img src= {weare} height="150px" alt="portrailt" data-delighter="start:0.5;"/>
                    <span style={{fontSize:'150px', lineHeight:'0.6em', opacity:'0.2', userSelect:'none'}}>&#10077;</span>
                    <h1>We Are:</h1>
                    <p data-delighter="start:0.5;">
                       Bouyant Ideal LTD, Importer and Exporter of agricultural products like:<br/>
                      Salted Beef Omasum, Cow Skin, BitterKola, Beef Tongue, Cow Horn,Beef Pizzles
                    </p>
                </div>
            
                <div className="slide2">
                    <h1>Products</h1>
                    <p>Agricultural products are 100% organic.we garunteed for the quality taste for your special meals.</p>
                    <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                        <ProductDetail name = "Cow Horn" item="horn" producer="Bouyant" location="Nigeria" />
                        <ProductDetail name = "Salted Omasum" item="omasum" producer="Bouyant" location="Nigeria"  />
                        <ProductDetail name = "Fish" item="fish" producer="Bouyant" location="Nigeria" />
                        <ProductDetail name = "BitterKola" item="Bitterkola" producer="Bouyant" location="Nigeria"/>
                      
                    </div>
                    <div style={{textAlign:"center"}}>
                        <NavButton link='./products' title='Check out more of our products'/>
                    </div>
                </div>
            
                <div className="slide3">
                    <h1>Our Team</h1>
                    <DivCarousel />
                </div>
            
                <div className="slide4">
                    <h1>Contact</h1>
                    <div className="contact">
                        <p>You can call us in, or come in to the store and see for yourself our freash and delicious food. </p>
                        <h3>Reach Us At</h3>
                        <p>  Gacoun Plaza, Opp. K Close, 23 Road, Festac Town,Lagos<br/> +234(0)8100895033<br/>
                +234(0)8100895033</p>
                        <h3>Open Hours</h3>
                        <p>
                            Monday-Saturday:9:00AM - 6:00PM<br/>
                            *Closed for weekends and holidays.
                        </p>
                    </div>
                </div> 
            </div>
        );
    }
}