import React from 'react';
import styled from "styled-components";
import Iframe from './googleMap';

function Contact() {
    return(
        <Wrapper>
            <h1>Contact</h1>
            <Map>
                
                <h3>Reach Us At</h3>
                <p>Gacoun Plaza, Opp. K Close, 23 Road, Festac Town,Lagos<br/> +234(0)8100895033<br/>
              +234(0)7032968184 <br/>
          <a href = 'mailto: weta5000@gmail.com'> weta5000@gmail.com </a>   
                </p>
                <h3>Open Hours</h3>
                    <p>
                        Monday - Friday: 9:00AM - 6:00PM<br/>
                        *Closed for Weekends and holidays.
                    </p>
                <Iframe/>
            </Map>
        </Wrapper>
    );
}

const Map = styled.div`
    background-color: rgba(244, 244, 244, 0.9); 
    padding: 10%;
    border-radius: 5px;
    padding-bottom: 40%;

    @media only screen and (max-width:1024px){
        padding-bottom: 70%;
    }
    
`;

const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(212,228,239,0.5) 0%, rgba(134,174,204,0.5) 100%),
                url(bgd.jpg) no-repeat fixed;
    padding: 10%;
    height: 100vh;
    overflow: auto;

    h1{ 
        color: white;
        font-family: 'Roboto', sans-serif;
        font-weight: 900;
        font-size: 150%; 
        
        &::after{
            border-bottom: solid 1px #FF8A20;
            bottom: 0;
            content: "";
            display: block;
            width: 15%;
        }
    }
`;

export default Contact