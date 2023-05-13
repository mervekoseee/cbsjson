import React, { useState, useEffect } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer, FeatureGroup } from 'react-leaflet'
import '../components/App.css';
import { Header } from '../partials/header';
import styled from 'styled-components';
import Footer from '../partials/Footer';
import { EditControl } from 'react-leaflet-draw';
import Swal from 'sweetalert2';
import { Button } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';

const StyledPrivatePage = styled.div`
color: #fefae0;

.pre-container{
  color: #90a955;
  font-weight: 900;
  font-size: 100%;
  border-style: inset;
  border-color: #31572c;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 350px;
  position: absolute;
  right: 0;
  top: 200px;
}
`;

const center = {
  lat: 39.86442,
  lng: 32.73765
}


const PrivatePage = () => {
  const markerArray = [];
  const selectedMarkers = [];
  const layerTypes = [];
  const [polypoints, setPolyPoints] = useState([]);
  
  const [nodes, setNodes] = useState([]);
  const mapConfig = {
    lat: 22,
    lng: -72,
    zoom: 6
  };

  const [mapLayers, setMapLayers] = useState([]);
  var color = {
    color: 'blue'
  }
  


  function selectedMarkersControl() {
    const _lastMarkers = [];
    _lastMarkers.push(selectedMarkers);
    console.log("ttt Grubun son hali: ", _lastMarkers[0]);
  }

  useEffect(() => {
    console.log("TEST1", polypoints);
    console.log("TEST", selectedMarkers);
    if (polypoints.length > 1) {
      groupFunc();
    }
  }, [polypoints]);

 


  function clearArray() {
    while (selectedMarkers.length > 0) {
      selectedMarkers.pop();
    }
    console.log("SelectedMarkers", selectedMarkers);
  }

  const onDrawStart = e => {
    const { layerType, layer } = e;
    console.log("Çizim Başlatıldı", layerType);
  };

  const onEdited = e => {
    let numEdited = 0;
    e.layers.eachLayer(layer => {
      numEdited += 1;
    });
    console.log(`Düzenlendi: edited ${numEdited} layers`, e.layers._latlng);
    if(layerTypes.indexOf("polygon")){
      console.log("geldi");
      selectedMarkersControl();
    }
  };

  const onDeleted = e => {
    let numDeleted = 0;
    e.layers.eachLayer((layer) => {
      numDeleted += 1;
      clearArray();
      console.log("SelectedMarkers", selectedMarkers);
    });
    console.log(`Silindi: removed ${numDeleted} layers`, e);
  
  };

  const onCreated = e => {
    const { layerType, layer } = e;
    console.log(e, "içeride")
    if (layerType === "polygon") {
      setPolyPoints(layer._latlngs);
      console.log("Oluştu" + e);

      var marker =
        setMapLayers(layers => [
          ...layers,
          {  latLngs: layer.getLatLngs() },
        ])
    }
    if (layerType === "marker") {
      console.log(layer);
      console.log("Oluştu" + JSON.stringify(layer._latlng));
      var marker =
        setMapLayers(layers => [
          ...layers,
          {  latLng: layer.getLatLng() },
        ])

      
    }

  }
  function groupFunc() {
    console.log("DENEME5", polypoints);
    if (polypoints.length > 0) {
      if (polypoints[0].length > 0 && nodes.length > 0) {
        console.log("İÇERİDE ");

        for (var k = 0; k < nodes.length; k++) {
          var inside = false;
          var x = nodes[k].latitude;
          var y = nodes[k].longitude;
          for (
            var i = 0, j = polypoints[0].length - 1;
            i < polypoints[0].length;
            j = i++
          ) {
            var xi = polypoints[0][i].lat,
              yi = polypoints[0][i].lng;
            var xj = polypoints[0][j].lat,
              yj = polypoints[0][j].lng;
            var intersect =
              yi > y != yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi;
            if (intersect) inside = !inside;
            console.log(inside);
          }
          if (inside === true) {
            console.log("geldi");
            console.log("ttt => nodes => ", nodes[k]);
            selectedMarkers.push(nodes[k]);
            // setSelectedMarkers(prev=>({...prev,nodes:{[k]:nodes[k]}}));
            console.log("ttt sayı", selectedMarkers.length);
            selectedMarkersControl();
          }
        }
      }
    }

  }
  return (
    <StyledPrivatePage>
      <Header />
      <MapContainer
        center={center} zoom={mapConfig.zoom}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FeatureGroup>
           <EditControl
            onDrawStart={onDrawStart}
            position="topright"
            onEdited={onEdited}
            onCreated={onCreated}
            onDeleted={onDeleted}
            draw={{
              repeatMode: true,
              circle: false,
              circlemarker: false,
              polyline: false,
              marker: true,
              polygon: true,
              rectangle: false
            }}
          /> 
        </FeatureGroup>
      </MapContainer>
      <pre className='pre-container'>"features":  {JSON.stringify(mapLayers, 0, 2)}</pre>
      <pre className='pre-container'>"features":  {JSON.stringify(mapLayers, 0, 2)}</pre>
            <div  style={{
             position: 'absolute',
             top: '80px',
             right: '0',
             width: '200px',
             height: '100px',
             border: '3px' }}>
            <Button id = "buttonClick"
              size='sm'
              variant='success'
              onClick={() => {
              console.log("Çalışıyor")
              navigator.clipboard.writeText(
                JSON.stringify(mapLayers, 0, 2).trim()
              );
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Json bilgileri kopyalandı',
                showConfirmButton: false,
                timer: 1200
              })
              }}>
                Kopyala
                </Button>
        </div>
      <Footer />
    </StyledPrivatePage>

  );

}
export default PrivatePage;