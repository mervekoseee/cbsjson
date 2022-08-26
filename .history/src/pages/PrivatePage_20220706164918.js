import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import '../components/App.css';
import { Header } from '../partials/header';
import { useCallback, useMemo, useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';

const StyledPrivatePage =styled.div`
color: #fefae0;
p{
  margin-left: 10px;
}
`;


const center = {
  lat: 39.8,
  lng: 32.7
}

const PrivatePage = () => {

  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          setPosition(marker.getLatLng())
        }
      },
    }),
    [],
  )
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])
  console.log(position);

  return (
    <StyledPrivatePage>
      <Header />
      <p id='location'>
        Konumunuz: <br />
        latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
      </p>
      <MapContainer center={center}
        zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />



        <Marker
          id="marker_1"
          draggable={draggable}
          eventHandlers={eventHandlers}
          position={position}
          ref={markerRef}
        >
          <Popup minWidth={90}>
            <span onClick={toggleDraggable}>
              {draggable
                ? 'Konumu hareket ettirebilirsiniz.'
                : 'Konum kilitli. Hareket ettirmek için tıklayınız.'}
            </span>
          </Popup>
        </Marker>
      </MapContainer>
      
    </StyledPrivatePage>

  );

}
export default PrivatePage;