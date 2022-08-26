// import React,{ useState }  from 'react'
// import { Marker,Circle, LayerGroup, LayersControl, Popup, MapContainer, useMapEvents } from 'react-leaflet';
// import L from "leaflet";
// import '../components/App.css';
// import { useCallback, useMemo, useRef } from 'react';
// const center = {
//   lat: 39.8,
//   lng: 32.7
// }
// const zoom = 13


// const Circles = () => {

//   const [draggable, setDraggable] = useState(false)
//   const [position, setPosition] = useState(center)
//   const [map, setMap] = useState(null)
//   const markerRef = useRef(null)
//   function MyComponent() {
//      const map = useMapEvents({
//        click: (e) => {
//          const { lat, lng } = e.latlng;
//         L.marker([lat, lng]).addTo(map);
//        }
//     });
//      return null;
//    }

//   const toggleDraggable = useCallback(() => {
//     setDraggable((d) => !d)
//   }, [position])

//   const onClick = useCallback(() => {
//     map.setView(center, zoom)
//   }, [map])

//   return (
//     <> <MapContainer center={center}
//         zoom={13} scrollWheelZoom={true}
//         whenReady={(map) => {
//           console.log(map);
//           console.log("test");

//         }}
        
//         className="map-container">
//  <MyComponent/>
//       </MapContainer>
//       </>

//   );

// }
// export default Circles;
