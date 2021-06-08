import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import styled from "styled-components";

export class Iframe extends Component{
    render(){
        return(
            <Wrapper>
                <Map
                  google={this.props.google}
                  zoom={10}
                  style={mapStyles}
                  initialCenter={{ lat:6.4701, lng: 3.2741}}

                >
                    <Marker position={{ lat: 6.4703, lng:  3.2741}} />
                </Map>
            </Wrapper>
        );
    }
}

const Wrapper = styled.div`
    position: absolute;
    width: 30%;
    height: 30%;

    @media only screen and (max-width:1024px){
            width: 65%;
            height: 25%;

    }
`;

const mapStyles = {
  width: '100%',
  height: '100%',
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API
})(Iframe);