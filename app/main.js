// Initialize the map
var myMap = L.map("map");

// Maptiles for layers 1-10
L.tileLayer("projecttiles/{z}/{x}/{y}.jpg", {
  attribution:
    'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
  maxZoom: 10,
  errorTileUrl: 'projecttiles/11/0/0.jpg'
}).addTo(myMap);

// Maptiles for layers 11-18, with custom errortiles
for (let i = 11; i < 19; i++) {
  L.tileLayer("projecttiles/{z}/{x}/{y}.jpg", {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
    maxZoom: i,
    minZoom: i,
    errorTileUrl: 'projecttiles/' + i + '/0/0.jpg'
  }).addTo(myMap);
}



const markers = [{"filename": "photos/IMG_8107.jpg", "latitude": 34.58700833333334, "longitude": 58.42955833333333}, {"filename": "photos/IMG_7156.jpg", "latitude": 50.46309166666667, "longitude": 73.03121944444445}, {"filename": "photos/IMG_2696.jpg", "latitude": 41.189788888888884, "longitude": 71.50265555555555}, {"filename": "photos/IMG_8247.jpg", "latitude": 27.333691666666667, "longitude": 55.871925}, {"filename": "photos/IMG_8235.jpg", "latitude": 27.36058611111111, "longitude": 55.84854166666667}, {"filename": "photos/IMG_7184.jpg", "latitude": 50.469261111111116, "longitude": 73.03104444444445}, {"filename": "photos/IMG-7526.jpg", "latitude": 34.60766111111111, "longitude": 58.37481666666667}, {"filename": "photos/IMG-5762.jpg", "latitude": 34.609322222222225, "longitude": 58.383205555555556}, {"filename": "photos/IMG-2776.jpg", "latitude": 24.789572222222223, "longitude": 65.41095833333334}, {"filename": "photos/IMG_7841.jpg", "latitude": 33.77169722222222, "longitude": 84.29195277777778}, {"filename": "photos/IMG-7852.jpg", "latitude": 34.592847222222225, "longitude": 58.38825555555555}, {"filename": "photos/IMG_7709.jpg", "latitude": 28.698330555555557, "longitude": 81.16397777777779}, {"filename": "photos/IMG_7786.jpg", "latitude": 28.58553611111111, "longitude": 81.70784722222223}, {"filename": "photos/IMG_7667.jpg", "latitude": 26.374041666666667, "longitude": 80.08225277777777}, {"filename": "photos/IMG_8486.jpg", "latitude": 50.33672777777778, "longitude": 72.33963055555554}, {"filename": "photos/IMG_3151.jpeg", "latitude": 23.199858333333335, "longitude": 65.33645555555555}, {"filename": "photos/IMG_8210.jpg", "latitude": 34.58679444444444, "longitude": 58.399772222222225}]

// Create a marker cluster group
const clusterGroup = L.markerClusterGroup({
  iconCreateFunction: function(cluster) {
    // Get a random marker from the cluster
    const markers = cluster.getAllChildMarkers();
    const randomMarker = markers[Math.floor(Math.random() * markers.length)];
    return randomMarker.getIcon();
  }
});

// Loop through the markers array and add them to the cluster group
for (let i = 0; i < markers.length; i++) {
  const marker = markers[i];
  const icon = L.icon({
    iconUrl: marker.filename,
    iconSize: [100, 100],
    iconAnchor: [20, 20]
  });
  const markerObj = L.marker([marker.latitude, marker.longitude], { icon });
  clusterGroup.addLayer(markerObj);
}

myMap.addLayer(clusterGroup);

// Set the map's initial view to match the extent of the browser window
myMap.fitBounds([[0, 0], [window.innerHeight, window.innerWidth]]);

