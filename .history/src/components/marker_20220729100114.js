import React from 'react'
import { Circle, LayerGroup, LayersControl, Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';
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
        
        
          <LayerGroup>
          <Circle
            center={center}
            pathOptions={{ fillColor: 'red' }}
            radius={1900}
            stroke={false}
          />
          </LayerGroup>
          
      
        
        
      </StyledPrivatePage>
      )    

}
export default Markers;
//CLICK TO MAP FOR ADD MARKER (INSIDE MAD CONTAINER)
        // center={center}
        // zoom={13} scrollWheelZoom={true}

        // whenReady={(map) => {
        //   L.tileLayer('https://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', { foo: 'bar' });
        //   console.log(map);
        //   console.log("test");
        //   map.target.on("click", function (e) {

        //     var { lat, lng } = e.latlng;
        //     L.marker([lat, lng]).addTo(map.target).on('click', function (map) {
        //       var marker = map.target;
        //       let position = marker.getLatLng();
        //       var editableLayers = L.featureGroup().addTo(map);
        //       var drawControl = new L.Control.Draw({
        //         edit: {
        //           featureGroup: editableLayers
        //         }
        //       });

        //       marker.bindTooltip("konumu istediğiniz yere getirip sabitlemek için tıklayınız.");
        //       alert(position);
        //       marker.dragging.enable();
        //       console.log("geri geldi")
        //       marker.on('click', function (map) {
        //         var marker = map.target;
        //         console.log("test123")
        //         marker.dragging.disable();
        //         marker.bindTooltip("konum sabit");

        //       })

        //       { console.log(position); };
        //     }).bindTooltip("Konumu görmek ve <br/> imleci hareket ettirmek için tıkla", { lat, lng });

        //   }
        //   );
        // }
        // }