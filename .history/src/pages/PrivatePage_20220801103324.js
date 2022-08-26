import React, { useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer, FeatureGroup } from 'react-leaflet'
import '../components/App.css';
import { Header } from '../partials/header';
import styled from 'styled-components';
import Footer from '../partials/Footer';
import { EditControl } from 'react-leaflet-draw';
import Swal from 'sweetalert2';
import L from 'leaflet';

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
  // const [map, setMap] = useState(null)
  const markerArray = [];
  const rectangleArray = [];
  const selectedMarkers = [];
  const polygonArray= [];

  // const toggleDraggable = useCallback(() => {
  //   setDraggable((d) => !d)
  // }, [position])
  const mapConfig = {
    lat: 22,
    lng: -72,
    zoom: 6
  };

  const [mapLayers, setMapLayers] = useState([]);
  function markerGroup() {
    for (let i = 0; i < markerArray.length; i++) {
      console.log("dönüyor" + i);
      if (rectangleArray[0][0][0].lat <= markerArray[i].lat && rectangleArray[0][0][0].lng <= markerArray[i].lng) {
        console.log("içeride1")
        if (rectangleArray[0][0][1].lat >= markerArray[i].lat && rectangleArray[0][0][1].lng <= markerArray[i].lng) {
          console.log("içeride2")
          if (rectangleArray[0][0][2].lat >= markerArray[i].lat && rectangleArray[0][0][2].lng >= markerArray[i].lng) {
            console.log("içeride3")
            if (rectangleArray[0][0][3].lat <= markerArray[i].lat && rectangleArray[0][0][3].lng >= markerArray[i].lng) {
              console.log("başarılı")
              selectedMarkers.push(markerArray[i]);
              console.log("seçili markerlar" + selectedMarkers);
            } else {
              console.log("dışarıda")
            }
          } else {
            console.log("dışarıda")
          }
        } else {
          console.log("dışarıda")
        }
      } else {
        console.log("dışarıda")
      }
    }
  }
  const onDrawStart = e => {
    console.log("Çizim Başlatıldı", e.layer);
  };

  const onEdited = e => {

    let numEdited = 0;
    e.layers.eachLayer(layer => {
      numEdited += 1;
    });
    console.log(`Düzenlendi: edited ${numEdited} layers`, e,);

  };

  const onDeleted = e => {
    let numDeleted = 0;
    e.layers.eachLayer(layer => {
      numDeleted += 1;
    });
    console.log(`Silindi: removed ${numDeleted} layers`, e);
  };


  const onCreated = e => {
    const { layerType, layer } = e;
    if (layerType === "circlemarker") {
      var markerlatlng = layer._latlng;
      markerArray.push(markerlatlng);
      console.log("Çizim oluşturuldu: marker oluşturuldu.", markerlatlng);
      layer.on('click', function () {
        Swal.fire({
          title: 'Gruba eklemek istiyor musunuz?',
          showDenyButton: true,
          showCancelButton: true,
          confirmButtonText: 'Evet',
          denyButtonText: `Hayır`,
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire('Marker gruba eklendi!', '', 'success')
            selectedMarkers.push(markerlatlng)
            console.log("eklendi" + selectedMarkers)
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })
       
      })
    }
    else if (layerType === "rectangle") {
      const { _leaflet_id } = layer;
      var reclatlng = layer._latlngs;
      console.log(reclatlng)
      rectangleArray.push(reclatlng);
      var marker =
        setMapLayers(layers => [
          ...layers,
          { id: _leaflet_id, latLngs: layer.getLatLngs() },
        ])
      if (rectangleArray.length > 0 && markerArray.length > 0) {
        markerGroup();
       }
    }else if(layerType === "polygon"){
      const { _leaflet_id } = layer;
      var polypoints = layer._latlngs;
    
      // var seeArea = L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]);
      // console.log(seeArea);
      // polygonArray.push(L.GeometryUtil.geodesicArea(layer.getLatLngs()[0]));
      // console.log("diziye atandı: " + polygonArray)
      // console.log("polygon oluştu: " + layer._latlngs.lat);
      // var polypoints = layer.getLatLngs();

    //   console.log("polypoints" + polypoints)
       var x = markerArray[0].lat
       var y = markerArray[0].lng
       var inside = false;
       for(var i = 0, j = polypoints.length-1; i <polypoints.length; j = i++){
         var xi = polypoints[i][0][i].lat, yi = polypoints[i][0][i].lng;
        var xj = polypoints[j][0][j].lat, yj = polypoints[j][0][j].lng;
         var intersect = ((yi > y) != (yj > y))
        && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
     if (intersect) inside =! inside;
     console.log(inside)
       }
       return inside;
      
    }
    // if(layerType === "circlemarker" && layerType === "rectangle"){
    //   markerGroup();
    // }
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
              circlemarker: {
                repeatMode: false,
                showArea: true,
                allowIntersection: true,
                color: 'red'
              },
              polyline: false,
              marker: false,
              polygon: true,
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