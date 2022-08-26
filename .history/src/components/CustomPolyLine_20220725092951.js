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

const CustomPoliLine = () => {
  const mapRef = useRef();
  const [center, setCenter] = useState({ lat: 36.460353, lng: 126.440674 });
  const [map, setMap] = useState(null);

  const pos = [
    [36.460353, 126.440674],
    [34.789594, 135.438084], //to jpn
    [36.460353, 126.440674],
    [55.410343, 37.902312], //to rus
    [36.460353, 126.440674],
    [40.085148, 116.552407] //to chi
  ];

  return (
    <div>
      <MapContainer
        style={{ height: "480px", width: "100%" }}
        zoom={6}
        center={center}
        ref={mapRef}
        whenReady={setMap}
        scrollWheelZoom={true}
      >
        <FeatureGroup>
          {pos?.map((mark, i) => (
            <Marker key={i} position={mark} icon={customMarkerUserPos} />
          ))}

          <Polyline positions={pos} color="red" />
        </FeatureGroup>

      </MapContainer>
    </div>
  );
};

export default CustomPoliLine;



export const customMarkerUserPos = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
  iconSize: [15, 20],
  iconAnchor: [5, 20],
  popupAnchor: [2, -40]
});

