import React from 'react'
import { Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import '../components/App.css';
import { useCallback, useMemo, useRef } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
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

const Markers = () => {
    const [draggable, setDraggable] = useState(false)
    const [position, setPosition] = useState(center)
    const [map, setMap] = useState(null)
  
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
      }, [position])
      const onClick = useCallback(() => {
        map.setView(center, zoom)
      }, [map])
     
      return (
      <StyledPrivatePage>
      <script src='../components/add.js'/>
   
        
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
      
      </StyledPrivatePage>
      )    

}
export default Markers;