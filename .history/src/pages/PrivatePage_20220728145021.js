import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer, FeatureGroup } from 'react-leaflet'
import '../components/App.css';
import { Header } from '../partials/header';
import styled from 'styled-components';
import Footer from '../partials/Footer';
import { EditControl } from 'react-leaflet-draw';
import { latLng, map, L } from 'leaflet';


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

  // const toggleDraggable = useCallback(() => {
  //   setDraggable((d) => !d)
  // }, [position])
  const mapConfig = {
    lat: 22,
    lng: -72,
    zoom: 6
  };
 
  const _onDrawStart = e => {
    console.log("Çizim Başlatıldı", e);
  };

  const _onEdited = e => {
    let numEdited = 0;
    e.layers.eachLayer(layer => {
      numEdited += 1;
    });

    console.log(`Düzenlendi: edited ${numEdited} layers`, e);

  };
  const _makeGroup = e => {
    let type = e.layerType;
     let layer = e.layer;
     if(type === "marker" && e === 2 ){
       layer = ([e.layer._latlng.lat, e.layer._latlng.lng ], [e.layer._latlng.lat, e.layer._latlng.lng ])
       console.log(layer)
      }
  };

  const _onDeleted = e => {
    let numDeleted = 0;
    e.layers.eachLayer(layer => {
      numDeleted += 1;
    });
    console.log(`Silindi: removed ${numDeleted} layers`, e);

  };


  const _onCreated = e => {
    
     let type = e.layerType;
     let layer = e.layer;
     let group = [];
    let sayac = parseInt(e.layer);
     console.log("item sayısı" + sayac)
    //  layer = ([e.layer._latlng.lat, e.layer._latlng.lng ], [e.layer._latlng.lat, e.layer._latlng.lng ])
    //  console.log(layer);
     if (type === "marker") {
  
       console.log("Çizim oluşturuldu: Marker oluşturuldu", e.layer); //console ekranına bakarak item çekebilirim.
       alert(e.layer._latlng);
     } else if (type === "polyline") {
       console.log("Çizim oluşturuldu: Polyline oluşturuldu.", type, e.layer._latlng.lat);
     } else if (type === "polygon") {
       console.log("Çizim oluşturuldu: Polygon oluşturuldu", e.layerType);
       const line = layer.toGeoJSON().geometry.coordinates;
     console.log("bu line" + line);
       alert("polygon oluşturuldu.");
     }
     console.log("Geojson", layer.toGeoJSON().geometry.coordinates);
     
    
  };
 
  

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
            // onDrawVertex={_onDrawVertex}
            onEdited={_onEdited}
            onCreated={_onCreated}
            onDeleted={_onDeleted}
            draw={{
              circle: true,
              circlemarker: true,
              polyline: true,
              marker: true,
              draggable: true,
              polygon: {
                allowIntersection: true,
                shapeOptions: { color: "blue" },
                edit: true,
                showLength: true,
                metric: true,
                feet: true,
                tooltip: {
                  start: '- your text-'
                },
                showArea: true

              },
              rectangle: {
                shapeOptions: {
                  color: "red",
                  weight: 3
                }
              }
            }}
          />
        </FeatureGroup>
        
      </MapContainer>
      <Footer />
    </StyledPrivatePage>

  );

}
export default PrivatePage;