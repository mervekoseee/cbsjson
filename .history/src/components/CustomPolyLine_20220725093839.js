import {
  FeatureGroup,
  MapContainer,
  Marker,
  Polyline,
  TileLayer
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useRef, useState } from "react";
import { useCallback } from "react";

const center = {
  lat: 39.8,
  lng: 32.7
}

const CustomPoliLine = () => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)

 
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [position])

  return (
    <div>
 
     
          {position?.map((mark, i) => (
            <Marker key={i} position={mark}  />
          ))}

          <Polyline positions={position} color="red" />
       

    </div>
  );
};

export default CustomPoliLine;



// export const customMarkerUserPos = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
//   iconSize: [15, 20],
//   iconAnchor: [5, 20],
//   popupAnchor: [2, -40]
// });

