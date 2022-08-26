import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
 import '../components/map.css';

const center =[39.86475458080736, 32.73824665934317]
function Map(){
    return(
<MapContainer center={center} 
zoom={10} 
style={{width: '100vh', height: '100vh'}} 
scrollWheelZoom={false}>
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
    );
 }
 export default Map;