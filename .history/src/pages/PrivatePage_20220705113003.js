import React from "react";
import { withLayout } from "../partials/Layout";
import styled from "styled-components";
import { MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet";
import { Marker } from "react-leaflet";
import { Popup } from "react-leaflet";
import {
  MapContainer,
  TileLayer,
  useMap,
} from 'https://cdn.esm.sh/react-leaflet'

const StyledPrivate = styled.div`
body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  * {
    box-sizing: border-box;
  }
  
  .places-container {
    position: absolute;
    top: 10px;
    left: 100%;
    transform: translateX(-50%);
    z-index: 10;
    width: 300px;
  }
  
  .map-container {
    width: 80%;
    height: 100vh;
    }
  
  .combobox-input {
    width: 100%;
    padding: 0.5rem;
  }
  #map { height: 180px; };
`;


export const PrivatePage = () =>{
function Map(){
<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>

}
return(

<div><Map/></div>
);


}
export default withLayout(PrivatePage);