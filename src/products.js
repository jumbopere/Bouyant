import React from 'react';
import styled from "styled-components";
import ProductDetail from './ProductDetail';

const style = {
    display:'flex', 
    justifyContent:'flex-start',
    flexWrap:'wrap',
    padding: '10%',
}

function Products() {
    return(
        <Wrapper>
            <h1>Products</h1>
            <div style={style}>
                <ProductDetail name = "Cow Horn"   item="horn" producer="Bouyant Ideal LTD" location=" Kano, Nigeria" />
                <ProductDetail name = "Salted Beef Omasum" item="bf" producer="Bouyant Ideal LTD" location="Nigeria" />
                <ProductDetail name = "Bitterkola" item="Bitterkola" producer="Bouyant Ideal LTD" location="Port Harcourt, Nigeria" />
                <ProductDetail name = "Beef Tail" item="bu" producer="Bouyant Ideal LTD" location="kaduna, Nigeria " />
                <ProductDetail name = "Beef Pizzles" item="bt" producer="Bouyant Ideal LTD" location="Onisha, Nigeria" />
                <ProductDetail name = "Cow Skin" item="af" producer="Bouyant Ideal LTD" location="Nigeria " />
                <ProductDetail name = "Beef Tongue" item="bp" producer="Bouyant Ideal LTD" location="Nigeria" />
            </div>
        </Wrapper>     
    );
}

const Wrapper = styled.div`
    background: linear-gradient(to bottom, rgba(212,228,239,0.5) 0%, rgba(134,174,204,0.5) 100%), 
                url(about.jpg) no-repeat fixed;
    padding: 5%;
    overflow: auto;
    height: 100vh;
    
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

    .wrapper{
        opacity: 1;
        transform: rotateY(0deg);
    }

    @media only screen and (max-width:1024px){
        padding-top: 10%;
    }
    
`;

export default Products