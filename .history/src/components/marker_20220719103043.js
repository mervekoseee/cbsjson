import React from 'react'
import { Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import '../components/App.css';
import { useCallback, useMemo, useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';
import { useMapEvent } from 'react-leaflet';
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
  position: flex;
  right: 0;
  p{
    padding-left: 15px ;
  }
}

`;
function MyComponent() {
  const map = useMapEvent('click', () => {
    map.setCenter([50.5, 30.5])
  })
  return null
}

function Markers() {
  return (
    <MapContainer center={[50.5, 30.5]} zoom={13}>
      <MyComponent />
    </MapContainer>
  )
}
export default Markers;