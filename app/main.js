// Initialize the map
var myMap = L.map("map");

L.tileLayer("projecttiles/{z}/{x}/{y}.jpg", {
  attribution:
    'Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.',
  maxZoom: 18,
}).addTo(myMap);

// Set the map's initial view to match the extent of the browser window
myMap.fitBounds([[0, 0], [window.innerHeight, window.innerWidth]]);

