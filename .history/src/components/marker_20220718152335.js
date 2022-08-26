import React from 'react'
import { Popup } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import '../components/App.css';
import { useCallback, useMemo, useRef } from 'react';
import { useState } from 'react';

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
      var drawnItems = new L.geoJson();
       const dbClick = useCallback(()=>{
         var marker = L.marker(e.latlng).addTo(map);
			 var markerpopup = L.popup({
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
      return (
      <>
    <form className='form-container'>
        <p >
          Konumunuz: <br />
          latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
          <button onClick={onClick}>reset</button>
        </p>
        </form>
        
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
      
      </>
      )    

}
export default Markers;