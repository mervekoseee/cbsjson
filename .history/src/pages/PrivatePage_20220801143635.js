import React, { useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer, FeatureGroup } from 'react-leaflet'
import '../components/App.css';
import { Header } from '../partials/header';
import styled from 'styled-components';
import Footer from '../partials/Footer';
import { EditControl } from 'react-leaflet-draw';
import Swal from 'sweetalert2';

const StyledPrivatePage = styled.div`
color: #fefae0;

.pre-container{
  color: black;
  font-weight: 900;
  font-size: 100%;
  border-style: inset;
  border-color: #457b9d;
  padding-top: 1px;
  padding-bottom: 1px;
  width: 378px;
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
  // const [draggable, setDraggable] = useState(false)
  // const position = useState(center)
  // const [map, setMap] = useState(null)
  const markerArray = [];
  const selectedMarkers = [];
  const polygonArray = [];
  // const toggleDraggable = useCallback(() => {
  //   setDraggable((d) => !d)
  // }, [position])
  const mapConfig = {
    lat: 22,
    lng: -72,
    zoom: 6
  };

  const [mapLayers, setMapLayers] = useState([]);
  var color = {
    color: 'blue'
  }
  const markerGroup = e => {
    const { layerType, layer } = e;
    var polypoints = layer._latlngs;
    console.log(polypoints[0].length);

    console.log("markerarray: " + markerArray.length)
    if (polypoints[0].length > 0 && markerArray.length > 0) {
      for (var k = 0; k < markerArray.length; k++) {
        var inside = false;
        var x = markerArray[k].lat
        var y = markerArray[k].lng
        console.log(markerArray[k].lat)
        for (var i = 0, j = polypoints[0].length - 1; i < polypoints[0].length; j = i++) {
          var xi = polypoints[0][i].lat, yi = polypoints[0][i].lng;
          var xj = polypoints[0][j].lat, yj = polypoints[0][j].lng;
          var intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
          if (intersect) inside = !inside;
          console.log(inside)

        }
        if (inside == true) {
          console.log("geldi")
          selectedMarkers.push(markerArray[k])
          console.log("seçili markerlar" + selectedMarkers)
          selectedMarkersControl();
        }
      }
    }
  }
  function selectedMarkersControl() {
    const lastMarkers = [...new Set(selectedMarkers)];
    
    console.log("Grubun taslak hali: " + selectedMarkers)
    console.log("Grubun son hali: " + lastMarkers);
  }

//  const changeIcon = e =>{
//   if(lastMarkers){
//     circlemarkerColor: 'red'
//   }
//  }
  const onDrawStart = e => {
    console.log("Çizim Başlatıldı", e.layer);
  };

  const onEdited = e => {
    const { layerType, layer} = e;
    let numEdited = 0;
    e.layers.eachLayer(layer => {
      numEdited += 1;
    });
    console.log(`Düzenlendi: edited ${numEdited} layers`, e,);
    console.log(e.layers._layers)
    if(layerType === "polygon"){
console.log("polygon düzenlendi.")
    }

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
            console.log("eklendi: " + selectedMarkers)
            selectedMarkersControl();
          } else if (result.isDenied) {
            Swal.fire('Changes are not saved', '', 'info')
          }
        })

      })
    } else if (layerType === "polygon") {
      const { _leaflet_id } = layer;
      var marker =
        setMapLayers(layers => [
          ...layers,
          { id: _leaflet_id, latLngs: layer.getLatLngs() },
        ])
      markerGroup();
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
              circlemarker: {
                repeatMode: false,
                showArea: true,
                allowIntersection: true,
                color:'red'
              },
              polyline: false,
              marker: false,
              polygon: true,
              rectangle: true
            }}
          />
        </FeatureGroup>
      </MapContainer>
      <pre className='pre-container'>Poligon'un Konumu: {JSON.stringify(mapLayers, 0, 2)}</pre>
      {/* <pre > BURASI GRUPLARIN GÖSTERİLECEĞİ KISIM:{selectedMarkers.length}</pre> */}
      <Footer />
    </StyledPrivatePage>

  );

}
export default PrivatePage;