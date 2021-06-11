import React from 'react';
import styled from "styled-components";
import Iframe from './googleMap';
import { Email, LocationOn, WhatsApp, Phone } from '@material-ui/icons'


function Contact() {
    return (
        <Wrapper>
            <h1>Contact</h1>
            <Map>

                <h3>Reach Us At</h3>
                <p> <LocationOn />Gacoun Plaza, Opp. K Close, 23 Road, Festac Town,Lagos<br />
                    <a href="https://wa.me/+23480100895033" target="_blank" style={{ textDecoration: "none", color: "black" }}> <WhatsApp /> +234(0)8100895033</a><br />
                    <a href='tel: +07032968184' target='_blank' style={{ textDecoration: "none", color: 'black' }}><Phone /> +234(0)7032968184</a><br />
                    <a href='mailto: weta5000@gmail.com' target="_blank" style={{ textDecoration: 'none', color: 'black' }}><Email fontSize='small' /> weta5000@gmail.com </a>
                </p>
                <h3>Open Hours</h3>
                <p>
                    Monday - Friday: 9:00AM - 6:00PM<br />
                        *Closed for Weekends and holidays.
                    </p>
                <h3>Our Other Locations</h3>
                <ul>
                    <li>KAOB - KWATA ABATTOIR OMASUM BRANCH - ANAMBRA STATE</li>

                    <li> UAOB - UMUAHIA ABATTOIR OMASUM BRANCH - ABIA STATE </li>

                    <li> YAOB - YOLA ABATTOIR OMASUM BRANCH - ADAMAWA STATE</li>

                    <li> AYOB - ABATTOIR YENOGUA OMASUM BRANCH - BAYELSA STATE</li>

                    <li> AKOB - ABATTOIR KATANGUM OMASUM BRANCH - BAUCHI STATE</li>

                    <li> MAOB - MAKURDI ABATTOIR OMASUM BRANCH - BENUE STATE</li>

                    <li> CAOB - CALABAR ABATTOIR OMASUM BRANCH - CROSS RIVER STATE</li>

                    <li> ASAOB - ASABA ABATTOIR OMASUM BRANCH - DELTA STATE</li>

                    <li> ABAOB - ABAKALIKI ABATTOIR OMASUM BRANCH - EBONYI STATE</li>

                    <li> OGAOB - OGBUETE ABATTOIR OMASUM BRANCH - ENUGU STATE</li>

                    <li> ADEAOB - ADO EKITI ABATTOIR OMASUM BRANCH - EKITI STATE</li>

                    <li> AAOB - ABUJA ABATTOIR OMASUM BRANCH - ABUJA, FCT</li>

                    <li> GAOB - GOMBE ABATTOIR OMASUM BRANCH - GOMBE STATE</li>

                    <li> KAFAOB - KAFANCHAN ABATTOIR OMASUM BRANCH - KADUNA STATE</li>

                    <li> KCAOB - KATSINA CENTRAL ABATTOIR OMASUM BRANCH - KATSINA STATE</li>

                    <li> KAOB - KANO ABATTOIR OMASUM BRANCH - KANO STATE</li>

                    <li> JAOB - JIGAWA ABATTOIR OMASUM BRANCH - JIGAWA STATE</li>

                    <li> LAOB - LAFIA ABATTOIR OMASUM BRANCH - NASARAWA STATE</li>

                    <li> SAOB - SULEJA ABATTOIR OMASUM BRANCH - NIGER STATE</li>

                    <li> JOAOB - JOS ABATTOIR OMASUM BRANCH - PLATEAU STATE</li>

                    <li> IBAOB - IBADAN ABATTOIR OMASUM BRANCH - OYO STATE</li>

                    <li> AKOB - AKURE OMASUM BRANCH - ONDO STATE</li>

                    <li> ABOB - ABEOKUTA OMASUM BRANCH - OGUN STATE</li>

                    <li> ILAOB - ILORIN ABATTOIR OMASUM BRANCH - KWARA STATE</li>

                    <li> GUAOB - GUSAU ABATTOIR OMASUM BRANCH - ZAMFARA STATE</li>

                    <li> SOAOB - SOKOTO ABATTOIR OMASUM BRANCH - SOKOTO STATE</li>

                    <li> GOAOB - GOMBE ABATTOIR OMASUM BRANCH - GOMBE STATE</li>

                    <li> MAOB - MAIDUGURI ABATTOIR OMASUM BRANCH - BORNO STATE</li>

                    <li> YOAOB - YOBE ABATTOIR OMASUM BRANCH - YOBE STATE</li>

                    <li> UYAOB - UYO ABATTOIR OMASUM BRANCH - AKWA IBOM STATE</li>

                    <li> BCAOB - BENIN CITY ABATTOIR OMASUM BRANCH - EDO STATE</li>

                    <li> OAOB - OWERRI ABATTOIR OMASUM BRANCH - IMO STATE</li>

                    <li> BKAOB - BIRINI KEBBI ABATTOIR OMASUM BRANCH - KEBBI STATE </li>

                    <li> LOKAOB - LOKOJA ABATTOIR OMASUM BRANCH - KOGI STATE </li>

                    <li> OSHAOB - OSHOGBO ABATTOIR OMASUM BRANCH - OSUN STATE</li>

                    <li> JAAOB - JALINGO ABATTOIR OMASUM BRANCH - TARABA STATE</li>
                </ul>
             <Iframe />
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