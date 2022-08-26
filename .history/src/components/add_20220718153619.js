
//Create OpenStreetMap Leaflet Tile Layer
var L = window.L;
var OpenStreetMap = L.tileLayer('//{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
//Create Leaflet Map
var map = L.map('map', {
  center: [34.0, -111.8],
  zoom: 15,
  attributionControl: true,
  layers: [OpenStreetMap]
});

//Create GeoJSON layer for user generated data
var drawnItems = new L.geoJson();
//Add GeoJSON layer to map
map.addLayer(drawnItems);


//Leaflet Draw Event
map.on('dblclick', function (e) {
			var marker = L.marker(e.latlng).addTo(map);
			var markerpopup = L.popup({
			});
			//Set popup lat lng where clicked
    		markerpopup.setLatLng(e.latlng);
        //console.log(e.layer._latlng);
			//Set popup content
    		markerpopup.setContent("Popup");     
			//Bind marker popup
			marker.bindPopup(markerpopup);
      //Add marker to geojson layer
			drawnItems.addLayer(marker);
		});