import React, { useRef, useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer, FeatureGroup, Marker, Polygon, CircleMarker } from 'react-leaflet'
import '../components/App.css';
import { Header } from '../partials/header';
import styled from 'styled-components';
import Footer from '../partials/Footer';
import { EditControl } from 'react-leaflet-draw';
import L, { circleMarker } from 'leaflet';
import {iconmarker} from '../assets/icon.png';


const StyledPrivatePage = styled.div`
color: #fefae0;

.form-container{
  color: black;
  border-style: inset;
  border-color: #457b9d;
  padding-top: 1px;
  padding-bottom: 1px;
  width: 378px;
  position: absolute;
  right: 0;
  top: 0;
}
`;

const center = {
  lat: 39.86442,
  lng: 32.73765
}


const PrivatePage = () => {
  // const [draggable, setDraggable] = useState(false)
  // const position = useState(center)
  const [map, setMap] = useState(null)
  const markerArray = [];
  const polygonArray = [];
  const selectedMarkers = [];

  // const toggleDraggable = useCallback(() => {
  //   setDraggable((d) => !d)
  // }, [position])
  const mapConfig = {
    lat: 22,
    lng: -72,
    zoom: 6
  };

  const [mapLayers, setMapLayers] = useState([]);

  const _onDrawStart = e => {
    console.log("Çizim Başlatıldı", e.layerType);
  };

  const _onEdited = e => {

    let numEdited = 0;
    e.layers.eachLayer(layer => {
      numEdited += 1;
    });
    console.log(`Düzenlendi: edited ${numEdited} layers`, e,);

  };
  function markerGroups(){
    for (let i = 0; i < markerArray.length; i++) {
      console.log("dönüyor"+ i);
      
     if (polygonArray[0][0][0].lat <= markerArray[i].lat && polygonArray[0][0][0].lng <= markerArray[i].lng) {
       console.log("içeride1")
       if (polygonArray[0][0][1].lat >= markerArray[i].lat && polygonArray[0][0][1].lng <= markerArray[i].lng) {
         console.log("içeride2")
         if (polygonArray[0][0][2].lat >= markerArray[i].lat && polygonArray[0][0][2].lng >= markerArray[i].lng) {
           console.log("içeride3")
           if (polygonArray[0][0][3].lat <= markerArray[i].lat && polygonArray[0][0][3].lng >= markerArray[i].lng) {
             console.log("başarılı")
             selectedMarkers.push(markerArray[i]);
             console.log("seçili markerlar"+ selectedMarkers);
           } else {
             console.log("dışarıda")
           }
         }else {
           console.log("dışarıda")
         }
       }else {
         console.log("dışarıda")
       }
     }else {
       console.log("dışarıda")
     }
   }

  }
  const _onDeleted = e => {
    let numDeleted = 0;
    e.layers.eachLayer(layer => {
      numDeleted += 1;
    });
    console.log(`Silindi: removed ${numDeleted} layers`, e);
  };


  const _onCreated = e => {
    const { layerType, layer } = e;
    if (layerType === "circlemarker") {
      var markerlatlng = layer._latlng;
      layer.on('click', function(){
        console.log("tıklandı");
        selectedMarkers.push(markerlatlng);
        console.log("eklendi: "+ selectedMarkers)
      })
      markerArray.push(markerlatlng);
      console.log("Çizim oluşturuldu: marker oluşturuldu.", markerlatlng);
      if (polygonArray.length > 0 && markerArray.length > 0) {
        markerGroups();
       }
    }
    else if (layerType === "rectangle") {
      const { _leaflet_id } = layer;
      var polylatlng = layer._latlngs;
      polygonArray.push(polylatlng);
      var marker =
        setMapLayers(layers => [
          ...layers,
          { id: _leaflet_id, latLngs: layer.getLatLngs() },
        ])
   

      if (polygonArray.length > 0 && markerArray.length > 0) {
       markerGroups();
      }
    }
    // console.log("bu marker" + markerArray )
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
            onDrawStart={_onDrawStart}
            position="topright"
            onEdited={_onEdited}
            onCreated={_onCreated}
            onDeleted={_onDeleted}
            draw={{
              repeatMode: true,
              circle: false,
              circlemarker: {
                repeatMode: false,
                showArea: true,
                allowIntersection: true,
                color: 'red'
              },
              polyline: false,
              marker:false,
              polygon: {
                showArea: false,
                allowIntersection: true,
                shapeOptions: { color: "red" },
                edit: true,
                showLength: true,
                metric: true,
                feet: true,
                showArea: false

              },
              rectangle: true
            }}
          />
        </FeatureGroup>
      </MapContainer>
      <pre className='text-topright'>{JSON.stringify(mapLayers, 0, 2)}</pre>

      <Footer />
    </StyledPrivatePage>

  );

}
export default PrivatePage;