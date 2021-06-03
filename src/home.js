import React, { Component } from 'react';
import VideoCover from 'react-video-cover';
import NavButton from './button';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

import './App.css';
import Content from './content';
import Footer from './footer';

const fadeInAnimation = keyframes`${pulse}`;
const FadeInDiv = styled.div`animation: ${fadeInAnimation} 13s ease-in-out infinite;`;

class Home extends Component {
    state = {
        resizeNotifier: () => {},
    }
    render() {
        const videoOptions = {
          src: './video/bg.mp4',
          autoPlay: true,
          loop: true,
          muted: true
        };
        
        return (
            <div style={{position:'relative', overflow:'hidden'}}>
                <Mobile></Mobile>
                <Wrapper>
                    <VideoCover
                      videoOptions={videoOptions}
                      remeasureOnWindowResize
                      getResizeNotifier={resizeNotifier => {
                        this.setState({
                          resizeNotifier,
                        });
                      }}
                    />
                </Wrapper>
                
                <FadeInDiv style={{position:"absolute", top:"10px", right:'0'}}>
                    <img className="logo" src="./logo.png" height="240px" alt="logo" />
                </FadeInDiv>
                    
                <div className="homepage">
                    <h1>Importer and Exporter of:</h1>
                  
                   <h4>Salted Beef Omasum, Beef Pizzles, Beef Tail, Cow Horns, Cow Skin, Bitter Kola</h4>
                    <p className='info'>Gacoun Plaza, Opp. K Close, 23 Road, Festac Town,Lagos<br/> +234(0)8100895033
                +234(0)8100895033
                <br/> weta5000@gmail.com</p>
                <div style={{display:'flex', justifyContent:'center', flexWrap:'wrap'}}>
                        <NavButton link="./about" title="Learn more about us"/>
                        <NavButton link="./products" title="Check our products"/>
                    </div>
                    <div className="scrollDown">
                        <AnchorLink href="#content" >&#10569;</AnchorLink>
                    </div>
                </div>
                    
                <Content/>
                <Footer/>
            </div>
        );
    }
}
const Mobile = styled.div`
    display: none;
    
    @media only screen and (max-width: 600px){
        background: url("product.jpg") 50% 0 no-repeat;
        width: 250vw;
        height: 250vh;
        position: relative;
        margin: auto;
        top: -15vh;
        left: -15vw;
    }
    
`;


const Wrapper = styled.div`
    width: 150vw;
    height: 150vh;
    position: relative;
    margin: auto;
    top: -25vh;
    left: -25vw;
    z-index: -2;
    opacity: 1;
    
    @media only screen and (max-width: 600px){
        display: none;
    }
    

`;

export default Home;