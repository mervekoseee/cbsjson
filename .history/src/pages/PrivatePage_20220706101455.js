import React, { useCallback, useMemo, useRef, useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Popup, Marker } from 'react-leaflet';
import '../components/App.css';
import { Header } from '../partials/header';
import Footer from '../partials/Footer';
import { LatLng } from 'leaflet';
const center = {
  lat: 39.8,
  lng: 32.7
}

const PrivatePage = () => {
  
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const markerRef = useRef(null)
  const handleDragEnd = (e) => {
    const { lat, lng } = e.target.getLatLng();
    console.log(`Lat: ${lat}, Lon: ${lng}`);
  };
  const [value, setValue] = useState();

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
  const showPosition = {position}
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [])
  console.log(position);
  return (
    
    <div>
      
      <Header />
      <MapContainer center={center}
        zoom={13} 
        scrollWheelZoom={true}>
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
            {position}
            <span onClick={toggleDraggable}>
              {draggable
                ? 'Konumu hareket ettirebilirsiniz.'
                : 'Konum kilitli. Hareket ettirmek için tıklayınız.'}
            </span>
          </Popup>
          
        </Marker>
       
      </MapContainer>
      {/* <RangeSlider
        value={value}
        className="slider"
        max={2020}
        onChange={(e) => setValue(e.target.value)}
      />
       */}
      <Footer />
    </div>
    
  );

}
export default PrivatePage;