 import {
   FeatureGroup,
   MapContainer,
   Marker,
   Polyline,
   TileLayer,
   LayersControl,
   useMapEvents,
   Popup
 } from "react-leaflet";
 import "leaflet/dist/leaflet.css";
 import L from "leaflet";
 import { useRef, useState } from "react";


 const CustomPoliLine = () => {
   const mapRef = useRef();
   const [map, setMap] = useState(null);
   const [draggable, setDraggable] = useState(false)
  

   const pos = [
     [36.460353, 0.440674],
     [34.789594, 135.438084], //to jpn
     [36.460353, 126.440674],
     [55.410343, 37.902312], //to rus
     [36.460353, 126.440674],
     [40.085148, 116.552407] //to chi
   ];

   return (
     <div>
 
         <FeatureGroup
         whenready = {(map) =>{
          var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

var options = {
  position: 'topleft',
  draw: {
    polygon: {
      allowIntersection: false, // Restricts shapes to simple polygons
      drawError: {
        color: '#e1e100', // Color the shape will turn when intersects
        message: '<strong>Oh snap!<strong> you can\'t draw that!' // Message that will show when intersect
      },
      shapeOptions: {
        color: '#97009c'
      }
    },
    polyline: {
    	shapeOptions: {
        color: '#f357a1',
        weight: 10
          }
    },
    // disable toolbar item by setting it to false
    polyline: true,
    circle: true, // Turns off this drawing tool
    polygon: true,
    marker: true,
    rectangle: true,
  },
  edit: {
    featureGroup: editableLayers, //REQUIRED!!
    remove: true
  }
};

// Initialise the draw control and pass it the FeatureGroup of editable layers
var drawControl = new L.Control.Draw(options);
map.addControl(drawControl);

var editableLayers = new L.FeatureGroup();
map.addLayer(editableLayers);

map.on('draw:created', function(e) {
  var type = e.layerType,
    layer = e.layer;

  if (type === 'polyline') {
    layer.bindPopup('A polyline!');
  } else if ( type === 'polygon') {
  	layer.bindPopup('A polygon!');
  } else if (type === 'marker') 
  {layer.bindPopup('marker!');}
  else if (type === 'circle') 
  {layer.bindPopup('A circle!');}
   else if (type === 'rectangle') 
  {layer.bindPopup('A rectangle!');}
  pos?.map((pos, i) => (
    <Marker key={i} position={pos} draggable={true}  />
  ))

  editableLayers.addLayer(layer);
});
         }}>
           {pos?.map((pos, i) => (
             <Marker key={i} position={pos} draggable={true}  />
           ))}
           
           <Polyline positions={pos} color="red" />
         </FeatureGroup>

     </div>
   );
 };

 export default CustomPoliLine;



// // export const customMarkerUserPos = new L.Icon({
// //   iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
// //   iconSize: [15, 20],
// //   iconAnchor: [5, 20],
// //   popupAnchor: [2, -40]
// // });

