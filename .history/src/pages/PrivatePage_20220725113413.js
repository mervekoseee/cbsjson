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
import AddMarker from '../components/addMarker';
import { Button } from 'bootstrap';
import { Polyline, FeatureGroup } from 'react-leaflet';
import CustomPoliLine from '../components/CustomPolyLine';


const StyledPrivatePage = styled.div`
color: #fefae0;

.form-container{
  color: black;
  border-style: inset;
  border-color: #457b9d;
  padding-top: 1px;
  padding-bottom: 1px;
  width: 378px;
  position: absolute;
  right: 0;
  p{
    padding-left: 15px ;
  }
  button{
    position: center;
  }
}
#button {
  z-index: 1050;
  position: absolute;
  top: 10px;
  left: 50px;
}
`;

const center = {
  lat: 48.8583736,
  lng: 2.2922926
}
const zoom = 13
// const addMarker = (map, e) =>{
//   var { lat, lng } = e.latlng;
//   L.marker([lat, lng]).addTo(map.target)
// };

const PrivatePage = () => {
  const mapRef = useRef();
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const [map, setMap] = useState(null)

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [position])

  // const onClick = useCallback((map) => {
  //   // var marker = L.marker([51.5, -0.09]).addTo(map);
  //   // var editableLayers = L.featureGroup().addTo(map);
  // }, [])
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
        {/* <button type="button" onClick={onClick}>
          tıklaaaaaaaaaaaaaaaaaaaa

        </button> */}
      </form>


      <MapContainer

        center={center}
        zoom={13} scrollWheelZoom={true}

        whenReady={(map) => {
        
          L.tileLayer('https://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', { foo: 'bar' });
          console.log(map);
          console.log("test");
        var button = document.createElement(btn)
          map.target.on("click", function (e) {
      
            var { lat, lng } = e.latlng;
            L.marker([lat, lng]).addTo(map.target).on('click', function (map) {
              var marker = map.target;
              let position = marker.getLatLng();
              marker.bindTooltip("konumu istediğiniz yere getirip sabitlemek için tıklayınız.");
              alert(position);
              marker.dragging.enable();
              console.log("geri geldi")
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
      >
        <FeatureGroup
        whenReady ={(map)=>{
          var polylineDrawer = new L.Draw.Polyline(map, {})
        polylineDrawer.enable()
        console.log("okudu");
        }}>
          
          <Marker position={[51.505, -0.09]} draggable={true}>

          </Marker >
         
        </FeatureGroup>

        
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Markers />
        <CustomPoliLine/>
      </MapContainer>

      <Footer />
    </StyledPrivatePage>

  );

}
export default PrivatePage;