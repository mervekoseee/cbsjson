import React, { useCallback, useRef, useState } from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { Marker, TileLayer, Polyline, FeatureGroup } from 'react-leaflet'
import '../components/App.css';
import { Header } from '../partials/header';
import L from "leaflet";
import styled from 'styled-components';
import Footer from '../partials/Footer';
import Markers from '../components/marker';
import { EditControl } from 'react-leaflet-draw';

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
  p{
    padding-left: 15px ;
  }
  button{
    position: center;
  }
}
#button {
  z-index: 1050;
  position: absolute;
  top: 10px;
  left: 50px;
}
`;

const center = {
  lat: 39.864422776891594,
  lng: 32.7376595959118
}


const PrivatePage = () => {
  const mapRef = useRef();
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(center)
  const [map, setMap] = useState(null)

  const toggleDraggable = useCallback(() => {
    setDraggable((d) => !d)
  }, [position])
  const mapConfig = {
    lat: 22,
    lng: -72,
    zoom: 6
  };
  const _onDrawStart = e => {
		console.log("_onDrawStart", e);
	};
  const _onEdited = e => {
		let numEdited = 0;
		e.layers.eachLayer(layer => {
			numEdited += 1;
		});
		console.log(`_onEdited: edited ${numEdited} layers`, e);

	};
  const _onDeleted = e => {
		let numDeleted = 0;
		e.layers.eachLayer(layer => {
			numDeleted += 1;
		});
		console.log(`onDeleted: removed ${numDeleted} layers`, e);

		// this._onChange();
	};
  const _onCreated = e => {
		let type = e.layerType;
		let layer = e.layer;
		if (type === "marker") {
			console.log("_onCreated: marker created", e);
		} else {
			console.log("_onCreated: something else created:", type, e);
		}

		console.log("Geojson", layer.toGeoJSON());
		console.log("coords", layer.getLatLngs());

		// this._onChange();
	};

  return (
    <StyledPrivatePage>
      <Header />
      <form className='form-container'>
        <ul >
          <li >
            Başlangıç konumu: <br />
            latitude: {position.lat.toFixed(4)}, longitude: {position.lng.toFixed(4)}{' '}
          </li>
        </ul>
      </form>

      <MapContainer
center={[mapConfig.lat, mapConfig.lng]} zoom={mapConfig.zoom}
        // center={center}
        // zoom={13} scrollWheelZoom={true}

        // whenReady={(map) => {
        //   L.tileLayer('https://{s}.somedomain.com/{foo}/{z}/{x}/{y}.png', { foo: 'bar' });
        //   console.log(map);
        //   console.log("test");
        //   map.target.on("click", function (e) {

        //     var { lat, lng } = e.latlng;
        //     L.marker([lat, lng]).addTo(map.target).on('click', function (map) {
        //       var marker = map.target;
        //       let position = marker.getLatLng();
        //       var editableLayers = L.featureGroup().addTo(map);
        //       var drawControl = new L.Control.Draw({
        //         edit: {
        //           featureGroup: editableLayers
        //         }
        //       });

        //       marker.bindTooltip("konumu istediğiniz yere getirip sabitlemek için tıklayınız.");
        //       alert(position);
        //       marker.dragging.enable();
        //       console.log("geri geldi")
        //       marker.on('click', function (map) {
        //         var marker = map.target;
        //         console.log("test123")
        //         marker.dragging.disable();
        //         marker.bindTooltip("konum sabit");

        //       })

        //       { console.log(position); };
        //     }).bindTooltip("Konumu görmek ve <br/> imleci hareket ettirmek için tıkla", { lat, lng });

        //   }
        //   );
        // }
        // }
      >
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
          onDeleted={_onDeleted}>

          </EditControl>
        </FeatureGroup>
        {/* <Markers /> */}
        {/* <Test/> */}
      </MapContainer>
      <Footer />
    </StyledPrivatePage>

  );

}
export default PrivatePage;