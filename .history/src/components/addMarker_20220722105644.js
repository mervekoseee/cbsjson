import React from "react";
import Map from "./Map";
import L from 'leaflet';

const PolyLine = () => {
    var map = L.map('map').setView([48.86, 2.35], 11);
    var button;

    var editableLayers = L.featureGroup().addTo(map);
    var drawControl = new L.Control.Draw({
      edit: {
        featureGroup: editableLayers
      },
      draw: false
    }).addTo(map);
    
    // Add a new editable rectangle when clicking on the button.
    button.addEventListener('click', function(event) {
      event.preventDefault();
    
      L.rectangle([
        getRandomLatLng(),
        getRandomLatLng()
      ]).addTo(editableLayers); // Add to editableLayers instead of directly to map.
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    function getRandomLatLng() {
      return [
        48.8 + 0.1 * Math.random(),
        2.25 + 0.2 * Math.random()
      ];
    }
}
export default PolyLine;
