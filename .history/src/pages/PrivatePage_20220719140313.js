import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer, useMapEvents } from 'react-leaflet'
import '../components/App.css';
import { Header } from '../partials/header';
import { useCallback, useMemo, useRef } from 'react';
import { useState } from 'react';
import icon from "./constants"
import L from "leaflet";
import styled from 'styled-components';
import Footer from '../partials/Footer';
import Markers from '../components/marker';


const StyledPrivatePage = styled.div`
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
  // function MyComponent() {
  //   const map = useMapEvents({
  //     click: (e) => {
  //       const { lat, lng } = e.latlng;
  //       L.marker([lat, lng], { icon }).addTo(map);
  //     }
  //   });
  //   return null;
  // }
  function MyComponent() {
    const map = useMapEvent('click', () => {
      map.setCenter([50.5, 30.5])
    })
    return null
  }
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
        zoom={13} scrollWheelZoom={true}
        whenReady={(map) => {
          console.log(map);
          console.log("test");
          map.target.on("click", function (e) {
            const { lat, lng } = e.latlng;
            console.log({ lat, lng });
            L.marker([lat, lng]).addTo(map.target);
            
          }
          
          );
          }
          }
        className="map-container">

        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
  <Markers/>
  <MyComponent/>
      </MapContainer>
      <Footer />
    </StyledPrivatePage>

  );

}
export default PrivatePage;