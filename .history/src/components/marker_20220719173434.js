import React from 'react'
import { LayersControl, Popup, LayerGroup } from 'react-leaflet';
import { Marker, Circle } from 'react-leaflet';
import L from "leaflet";
import icon from "../pages/constants"
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
  position: flex;
  right: 0;
  p{
    padding-left: 15px ;
  }
}

`;
const center = {
    lat: 35.8,
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
        <LayersControl position="topright">
          <LayersControl.Overlay name="Marker with popup">
        
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
            <br/>
        
          Konumunuz: <br />
          latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
          
       
          </Popup>
       
        </Marker>
        </LayersControl.Overlay>
        <LayersControl.Overlay checked name="Layer group with circles">
        <LayerGroup>
          <Circle
            center={center}
            pathOptions={{ fillColor: 'blue' }}
            radius={12500}
            draggable={draggable}
            eventHandlers={eventHandlers}
            
          >
            <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? 'Konumu hareket ettirebilirsiniz.'
              : 'Konum kilitli. Hareket ettirmek için tıklayınız.'}
          </span>
          <br/>
      
        Konumunuz: <br />
        latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
        
     
        </Popup>
        </Circle>
          <Circle
            center={center}
            pathOptions={{ fillColor: 'red' }}
            radius={100}
            stroke={false}
            draggable={draggable}
            eventHandlers={eventHandlers}
          />
          <LayerGroup>
            <Circle
              center={[51.51, -0.08]}
              pathOptions={{ color: 'green', fillColor: 'green' }}
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>
      </LayersControl.Overlay>
        </LayersControl>
      </StyledPrivatePage>
      )    

}
export default Markers;