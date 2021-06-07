import React from 'react';
import styled from "styled-components";
import weare from './pictures/weare.jpg'

function About() {
    return(
        <Wrapper>
            <h1>About</h1>
            <div style={{backgroundColor:'rgba(244, 244, 244, 0.9)', padding:'10%', borderRadius:'5px'}}>
                <img src= {weare} height="150px" alt="portrailt"/>
                <span style={{
                    fontSize:'150px', 
                    lineHeight:'0.6em', 
                    opacity:'0.2', 
                    userSelect:'none', 
                    float: 'right'
                }}>
                    &#10077;
                </span>
                <h3>We Are:</h3>
                <p>
                  Bouyant Ideal LTD, a Agricultural import and export company based in Nigeria. We import and export various agricultural products such as: Salted Beef Omasum, Beef Pizzles, Cow  Horns, Beef Skin, Beef Tails, Beef Tongue, BitterKola etc.
                  We get our Products from different states in nigeria, where we have farms, ranch, Slaughter houses.
                  Our Company is registered under "Nigerian Cooperate Commision" 
              
                </p>
                <h3>Company Overview</h3>
                <ul>
                    <li>Established in 2012.02.08</li>
                    <li>Current Number of Staff: 20</li>
                    <li>Registertion Number: 76574637</li>

                    <li>Location: Lagos, Abuja, Kano, Jos,  Port-Harcout.</li>
                </ul>
               
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(212,228,239,0.5) 0%, rgba(134,174,204,0.5) 100%),
                url(about.jpg) no-repeat fixed;
    height: 100vh;
    padding: 10%;
    font-family: 'Roboto', sans-serif;
    font-size: 120%;
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

    h3{
        font-weight: 900;
    }
`;

export default About