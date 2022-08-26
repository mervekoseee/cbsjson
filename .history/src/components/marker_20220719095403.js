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
  position: flex;
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
    var drawnItems = new markerRef.geoJson();
    //Add GeoJSON layer to map
    map.addLayer(drawnItems);
    const addMarker = useCallback((e)=>{
      var marker = marker(e.latlng).addTo(map);
			var markerpopup = markerRef.popup({
			});
			//Set popup lat lng where clicked
    		markerpopup.setLatLng(e.latlng);
        //console.log(e.layer._latlng);
			//Set popup content
    		markerpopup.setContent("Popup");     
			//Bind marker popup
			marker.bindPopup(markerpopup);
      //Add marker to geojson layer
			drawnItems.addLayer(marker);
    },[])
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
        onClick={addMarker}>

        </Marker>
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
      
      </StyledPrivatePage>
      )    

}
export default Markers;