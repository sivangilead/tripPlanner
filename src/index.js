const mapboxgl = require("mapbox-gl");
const key=require("../key")
const createMarker=require("../marker")


mapboxgl.accessToken = key

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});


new mapboxgl.Marker(createMarker("Resturant")).setLngLat([-74.009, 40.705]).addTo(map); // [-87.641, 41.895] for Chicago
