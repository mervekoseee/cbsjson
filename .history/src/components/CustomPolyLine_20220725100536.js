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


const CustomPoliLine = () => {
  const mapRef = useRef();
  const [map, setMap] = useState(null);
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(null)

  const pos = useMapEvents({
    click() {
      map.locate()
    },
    locationfound(e) {
      setPosition(e.latlng)
      
    },
  })


  return (
    <div>
 
        <FeatureGroup>
          {pos?.map((mark, i) => (
            <Marker key={i} position={mark}  />
          ))}

          <Polyline positions={pos} color="red" />
        </FeatureGroup>

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

