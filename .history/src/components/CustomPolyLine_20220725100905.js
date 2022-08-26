// import {
//   FeatureGroup,
//   MapContainer,
//   Marker,
//   Polyline,
//   TileLayer,
//   LayersControl,
//   useMapEvents,
//   Popup
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";
// import { useRef, useState } from "react";


// const CustomPoliLine = () => {
//   const mapRef = useRef();
//   const [map, setMap] = useState(null);
//   const [draggable, setDraggable] = useState(false)
  

//   const pos = [
//     [36.460353, 0.440674],
//     [34.789594, 135.438084], //to jpn
//     [36.460353, 126.440674],
//     [55.410343, 37.902312], //to rus
//     [36.460353, 126.440674],
//     [40.085148, 116.552407] //to chi
//   ];

//   return (
//     <div>
 
//         <FeatureGroup>
//           {pos?.map((mark, i) => (
//             <Marker key={i} position={mark} draggable={true}  />
//           ))}

//           <Polyline positions={pos} color="red" />
//         </FeatureGroup>

//     </div>
//   );
// };

// export default CustomPoliLine;



// // export const customMarkerUserPos = new L.Icon({
// //   iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
// //   iconSize: [15, 20],
// //   iconAnchor: [5, 20],
// //   popupAnchor: [2, -40]
// // });

import { React, useState } from 'react'
import {
  LayersControl,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
} from 'react-leaflet'
import "leaflet-easybutton/src/easy-button.js";
import "leaflet-easybutton/src/easy-button.css";
import "font-awesome/css/font-awesome.min.css";

const { BaseLayer } = LayersControl

function LocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, map.getZoom())
    },
  })

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  )
}


function MapsMe() {
  return (
    
      <div className="flex ml-auto">
      <div className="w-4/5">
        <MapContainer center={[51.505, -0.09]} zoom={20} >
          <LayersControl>
            <BaseLayer checked name="OpenStreetMap">
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png "
              />
            </BaseLayer>
            <LocationMarker />
          </LayersControl>
        </MapContainer>
        </div>
    </div>
        
   
  )
}

export default MapsMe