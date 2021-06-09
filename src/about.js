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
                  Bouyant Ideal LTD, a licensed agricultural products export company based in Lagos Nigeria. We have over 4 years experience in the processing and export of agricultural products like salted beef omasum, beef pizzles, cow tail, cow tongue, cow skin, cow horns, bitter kola, goat and sheep skin among others.<br/>
                  Our goal has always being to satisfy our customers by supplying high quality products in line with international standard.  
              
                </p>
                <h3>Company Overview</h3>
                <ul>
                    <li>Established in 2010</li>
                    <li>Current Number of Staff: 60</li>
                    <li>Registertion Number: 76574637</li>

                    <li>Head-Office: Lagos, Nigeria </li>
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