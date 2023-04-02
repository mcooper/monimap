// Initialize the map
var myMap = L.map("map").setView([0, 0], 2);

// Maptiles for layers 1-10
L.tileLayer("projecttiles/{z}/{x}/{y}.jpg", {
  attribution:
    'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
  maxZoom: 10,
  minZoom: 1,
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

fetch('data/gpsdata.json')
  .then(response => response.json())
  .then(markers => {
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
  })


