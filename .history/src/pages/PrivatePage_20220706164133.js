import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { LayersControl, Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import '../components/App.css';
import { Header } from '../partials/header';
import Footer from '../partials/Footer';
import { useCallback, useMemo, useRef } from 'react';
import { useState } from 'react';

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
    <div>
      <Header />
      
      <MapContainer center={center}
        zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position='topright'>
          <LayersControl.Overlay name='Marker with popup'>
          <p>
      latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
    </p>

         
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
        </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
      <Footer />
    </div>
    
  );

}
export default PrivatePage;