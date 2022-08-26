import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import '../components/App.css';
import { Header } from '../partials/header';
import { useCallback, useMemo, useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Footer from '../partials/Footer';
import Markers from '../components/marker';


const StyledPrivatePage =styled.div`
color: #fefae0;

.form-container{
  color: black;
  border-style: inset;
  border-height: 10px;
  border-color: #457b9d;
  padding-top: 1px;
  padding-bottom: 1px;
  width: 378px;
  position: absolute;
  right: 0;
  p{
    padding-left: 15px ;
  }
}

`;

const center = {
  lat: 39.8,
  lng: 32.7
}
const zoom = 13


const PrivatePage = () => {

  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const [map, setMap] = useState(null)
  const markerRef = useRef(null)
 
  const dblclick = useCallback((e)=>{
  var marker = L.marker(e.latlng).addTo(map);
  var markerpopup = L.popup({
  });
  //Set popup lat lng where clicked
    markerpopup.setLatLng(e.latlng);
    //console.log(e.layer._latlng);
  //Set popup content
    markerpopup.setContent("Popup");     
  //Bind marker popup
  marker.bindPopup(markerpopup);
  //Add marker to geojson layer
  drawnItems.addLayer(marker);

 },[])
  
 const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  return (
    <StyledPrivatePage>
      <Header />
      <ul className='form-container'>
        <li >
          Başlangıç konumu: <br />
          latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
          
        </li>
        </ul>
        
        <MapContainer center={center}
        zoom={13} scrollWheelZoom={true} className="map-container">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <script src='../components/add.js'/>
      <Markers/>
      <Markers/>
      <Markers/>
      
      </MapContainer>
      <Footer/>
    </StyledPrivatePage>

  );

}
export default PrivatePage;