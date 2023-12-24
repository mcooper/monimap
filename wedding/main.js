let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  map = new Map(document.getElementById("map"), {
    center: { lat: 33.7531305, lng: -84.3876679 },
    zoom: 12,
    mapId: "WEDDING_MAP"
  });
  
  const labelTag = document.createElement("div");
  labelTag.className = "label-tag";
  labelTag.textContent = "TEST";


  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: { lat: 33.8531305, lng: -84.4876679 },
    content: labelTag,
  });

}

initMap();

