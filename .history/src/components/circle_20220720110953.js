import React from 'react'
import { Circle, LayerGroup, LayersControl, Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import L from "leaflet";
import icon from "../pages/constants"
import '../components/App.css';
import { useCallback, useMemo, useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';
const center = {
  lat: 39.8,
  lng: 32.7
}
const zoom = 13


const Circles = () => {

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

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [position])

  const onClick = useCallback(() => {
    map.setView(center, zoom)
  }, [map])

  return (
    <> <MapContainer center={center}
        zoom={13} scrollWheelZoom={true}
        whenReady={(map) => {
          console.log(map);
          console.log("test");

        }}
        className="map-container">
 
      </MapContainer>
      </>

  );

}
export default Circles;
