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
import styled from "styled-components";

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

const CustomPoliLine = () => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)

 
  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [position])

  return (
    <>
 
     
          {position?.map((mark, i) => (
            <Marker key={i} position={mark}  />
          ))}

          <Polyline positions={position} color="red" />
       

    </>
  );
};

export default CustomPoliLine;



// export const customMarkerUserPos = new L.Icon({
//   iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
//   iconSize: [15, 20],
//   iconAnchor: [5, 20],
//   popupAnchor: [2, -40]
// });

