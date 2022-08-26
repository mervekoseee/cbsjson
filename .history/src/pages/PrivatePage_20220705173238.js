import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import '../components/App.css';
import { Header } from '../partials/header';
import Footer from '../partials/Footer';
import { useCallback, useMemo, useRef } from 'react';
import { Draggable } from 'leaflet';
import { useState } from 'react';
const PrivatePage = () => {
  

  return (<div>
    <Header />
    <MapContainer center={[39.946217477824234, 32.83551931317827]} 
    zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[39.946217477824234, 32.83551931317827]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <Marker position={[40.001994712859734, 32.82865286849134]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
    <Footer />
  </div>
  );

  }
export default PrivatePage;