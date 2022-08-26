import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Popup } from 'react-leaflet';
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

  const [draggablem1, setDraggablem1] = useState(false)
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
  const toggleDraggablem1 = useCallback(() => {
    setDraggablem1((d) => !d)
  }, [])
  const toggleDraggablem2 = useCallback(() => {
    setDraggablem2((f) => !f)
  }, [])
  return (
    <div>
      <Header />
      <MapContainer center={center}
        zoom={13} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          id="marker_1"
          draggablem1={draggablem1}
          eventHandlers={eventHandlers}
          position={position}
          ref={markerRef}>
          <Popup minWidth={90}>
            <span onClick={toggleDraggablem1}>
              {draggablem1
                ? 'Konumu hareket ettirebilirsiniz.'
                : 'Konum kilitli. Hareket ettirmek için tıklayınız.'}
            </span>
          </Popup>
        </Marker>
        <Marker
          id="marker_2"
          draggablem2={draggablem2}
          eventHandlers={eventHandlers}
          position={position}
          ref={markerRef}>
          <Popup minWidth={90}>
            <span onClick={toggleDraggable}>
              {draggablem2
                ? 'Konumu hareket ettirebilirsiniz.'
                : 'Konum kilitli. Hareket ettirmek için tıklayınız.'}
            </span>
          </Popup>
        </Marker>
      </MapContainer>
      <Footer />
    </div>
  );

}
export default PrivatePage;