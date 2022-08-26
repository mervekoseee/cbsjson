import React, { useRef, useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer, FeatureGroup, Marker, Polygon, CircleMarker } from 'react-leaflet'
import '../components/App.css';
import { Header } from '../partials/header';
import styled from 'styled-components';
import Footer from '../partials/Footer';
import { EditControl } from 'react-leaflet-draw';
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
  const [map, setMap] = useState(null)
  const markerArray =[];
  const rectangleArray = [];

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
    console.log("Çizim Başlatıldı", e.layer);
  };

  const _onEdited = e => {

    let numEdited = 0;
    e.layers.eachLayer(layer => {
      numEdited += 1;
    });
    console.log(`Düzenlendi: edited ${numEdited} layers`, e,);

  };

  const _onDeleted = e => {
    let numDeleted = 0;
    e.layers.eachLayer(layer => {
      numDeleted += 1;
    });
    console.log(`Silindi: removed ${numDeleted} layers`, e);
  };
  const makegroup = e => {
    var sayac = 0;
    sayac = sayac + 1;
    console.log(sayac);
    
  }

  const _onCreated = e => {
    const { layerType, layer } = e;
    if (layerType === "marker") {
      var markerlatlng = layer._latlng;
      markerArray.push(markerlatlng);
      console.log("Çizim oluşturuldu: marker oluşturuldu.", markerlatlng);
    }
    else if (layerType === "rectangle") {
      const { _leaflet_id } = layer;
      var reclatlng= layer._latlngs;
      rectangleArray.push(reclatlng);
      var marker =
        setMapLayers(layers => [
          ...layers,
          { id: _leaflet_id, latLngs: layer.getLatLngs() },
        ])


      console.log("Çizim oluşturuldu: kare oluşturuldu", layerType, layer._latlngs[0]);
       console.log("Çizim oluşturuldu: kare oluşturuldu", layerType, layer._latlngs[0][0]);
       console.log("Çizim oluşturuldu: kare oluşturuldu", layerType, layer._latlngs[0][0].lat);
      
        // if (layer._latlngs[0][0].lat >= markerArray[0].lat && layer._latlngs[0][0].lng >= markerArray[0].lng) {
        //   console.log("içeride")
        //   if (layer._latlngs[0][1].lat >= markerArray[0].lat && layer._latlngs[0][1].lng >= markerArray[0].lng) {
        //     console.log("içeride")
        //     if (layer._latlngs[0][2].lat >=  markerArray[0].lat && layer._latlngs[0][2].lng >= markerArray[0].lng) {
        //       console.log("içeride")
        //       if (layer._latlngs[0][3].lat >= markerArray[0].lat && layer._latlngs[0][3].lng >= markerArray[0].lng) {
        //         console.log("içeride")
        //       }
        //     }
        // }
        // } else {
        //   console.log("dışarıda")
        // }
    }
    if(rectangleArray.length>0 && markerArray.length>0){
      //marker polygon kontolü
      for(let i = 0; i < markerArray.length; i++){
// console.log("dönüyor"+ i);
          // if(rectangleArray[0][0][0].lat >= markerArray[i].lat && rectangleArray[0][0][0].lng >= markerArray[i].lng){

          // }
      }

     }
     console.log("kare",rectangleArray);
     console.log("kare",rectangleArray[0]);
      console.log("kare",rectangleArray[0][0]);
      console.log("kare",rectangleArray[0][0][0]);
     console.log("kare",rectangleArray[0][0][0].lat);
    //  console.log("merve",markerArray[0].lat);
    console.log("Geojson", layer.toGeoJSON().geometry.coordinates);

  }




  return (
    <StyledPrivatePage>
      <Header />
      {/* <form className='form-container'>
        <ul >
          <li id='list'>
            Marker Konum:
          </li>
        </ul>
      </form> */}

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
              circle: false,
              circlemarker: {
                showArea: true,
                allowIntersection: true,
                shapeOptions: { color: "red" }
              },
              polyline: false,
              marker: true,
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
        {/* <Marker position={JSON.stringify(mapLayers,0,2)}/> */}
        {/* <Markers/> */}
      </MapContainer>
      <pre className='text-topright'>{JSON.stringify(mapLayers, 0, 2)}</pre>
      <button className="form-container" onClick={makegroup}>tıkla</button>

      <Footer />
    </StyledPrivatePage>

  );

}
export default PrivatePage;