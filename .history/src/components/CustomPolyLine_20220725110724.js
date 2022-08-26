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
import { Button } from "bootstrap";


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


    <FeatureGroup
      whenready={(map) => {
        var polylineDrawer = new L.Draw.Polyline(map, {})
        polylineDrawer.enable();
        
        var latlng = L.latLng(48.8583736, 2.2922926);
        polylineDrawer.addVertex(latlng);
        }}>
      {pos?.map((pos, i) => (
        <Marker key={i} position={pos} draggable={true} />
      ))}

      <Polyline positions={pos} color="red" />
    </FeatureGroup>


  );
};

export default CustomPoliLine;



// // export const customMarkerUserPos = new L.Icon({
// //   iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
// //   iconSize: [15, 20],
// //   iconAnchor: [5, 20],
// //   popupAnchor: [2, -40]
// // });

