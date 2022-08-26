import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker, TileLayer } from 'react-leaflet'
import '../components/App.css';
import { Header } from '../partials/header';
import { useCallback, useRef } from 'react';
import { useState } from 'react';
import { LayersControl } from 'react-leaflet';

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
  input{
    right: 10px;
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

  //  function MyComponent() {
  //    const map = useMapEvents({
  //      click: (e) => {
  //        function addM(){
  //         const { lat, lng } = e.latlng;

  //        }
  //        L.marker([lat, lng]).addTo(map);
  //      }
  //   });
  //   return null;
  //  }

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [position])

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  return (
    <StyledPrivatePage>
      <Header />
      <form className='form-container'>
        <ul >
          <li >
            Başlangıç konumu: <br />
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}

          </li>
        </ul>
        
      </form>


      <MapContainer center={center}
        zoom={13} scrollWheelZoom={true}
        whenReady={(map) => {
          console.log(map);
          console.log("test");

          map.target.on("click", function (e) {
            var { lat, lng } = e.latlng;
            L.marker([lat, lng]).addTo(map.target).on('click', function (map) {
              var marker = map.target;
              let position = marker.getLatLng();
              marker.bindTooltip("konumu istediğiniz yere getirip sabitlemek için tıklayınız.");
              alert(position);
              marker.dragging.enable();
              console.log("geri geldi")
              // marker.on('mouseover', function(map){
              //   console.log("içeride");
              //   var marker = map.target;
              //   marker.removeFrom(map.target)
              // })
              marker.on('click', function (map) {

                var marker = map.target;
                console.log("test123")
                marker.dragging.disable();
                marker.bindTooltip("konum sabit");

              })

              { console.log(position); };
            }).bindTooltip("Konumu görmek ve <br/> imleci hareket ettirmek için tıkla", { lat, lng });

          }
          );
        }
        }
        className="map-container">
          <LayersControl position="topright">
          <input type="number" id='num' placeholder="Email Adresinizi Giriniz..." />
        <br />
        <a className="btn btn-primary btn-user btn-block" onClick={
          function kk(e) {
            
          console.log("deneme")}
          
        }>Ekle</a>
        { }
          </LayersControl>
        <Marker position={[51.505, -0.09]}
        >
        </Marker>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers />

      </MapContainer>
      <Footer />
    </StyledPrivatePage>

  );

}
export default PrivatePage;