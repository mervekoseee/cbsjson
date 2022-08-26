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
        whenready={(map) => {
          var editableLayers = L.featureGroup().addTo(map);
          var drawControl = new L.Control.Draw({
            edit: {
              featureGroup: editableLayers
            }
          });

          // Add a new editable rectangle when clicking on the button.
          button.addEventListener('click', function (event) {
            event.preventDefault();

            L.rectangle([
              getRandomLatLng(),
              getRandomLatLng()
            ]).addTo(editableLayers); // Add to editableLayers instead of directly to map.
          });
          var map = L.map('map').setView([48.86, 2.35], 11);

          var editableLayers = L.featureGroup().addTo(map);
          var drawControl = new L.Control.Draw({
            edit: {
              featureGroup: editableLayers
            },
            draw: false
          }).addTo(map);

          // Add a new editable rectangle when clicking on the button.
          // button.addEventListener('click', function (event) {
          //   event.preventDefault();

          //   L.rectangle([
          //     getRandomLatLng(),
          //     getRandomLatLng()
          //   ]).addTo(editableLayers); // Add to editableLayers instead of directly to map.
          // });

          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(map);

          function getRandomLatLng() {
            return [
              48.8 + 0.1 * Math.random(),
              2.25 + 0.2 * Math.random()
            ];
          }
        }}>
        {pos?.map((pos, i) => (
          <Marker key={i} position={pos} draggable={true} />
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

