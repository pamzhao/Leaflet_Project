var myMap = L.map("map", {
  center: [37.7749, -122.4194],
  zoom: 13
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// var newtry = "http://data-lakecountyil.opendata.arcgis.com/datasets/3e0c1eb04e5c48b3be9040b0589d3ccf_8.geojson";
var newtry = "http://data.beta.nyc//dataset/0ff93d2d-90ba-457c-9f7e-39e47bf2ac5f/resource/" +
"35dd04fb-81b3-479b-a074-a27a37888ce7/download/d085e2f8d0b54d4590b1e7d1f35594c1pediacitiesnycneighborhoods.geojson";
// d3.json(newtry, function(response) {

//   console.log("hi", response);

//   L.geoJSON(response).addTo(myMap);
  // for (var i = 0; i < response.length; i++) {
  //   var location = response.features;

  //   console.log("hi again", location);
  //   if (location) {
  //     L.marker([location[1], location]).addTo(myMap);
  //   }
  // }

  
  function chooseColor(name) {
    switch (name) {
    case "California":
      return "yellow";
    case "New York":
      return "red";
    case "Washinton":
      return "orange";
    case "Oregon":
      return "green";
    default:
      return "black";
    }
  }
console.log(newtry);
  // Grabbing our GeoJSON data..
d3.json(newtry).then(function(data) {
  // Creating a geoJSON layer with the retrieved data
  // L.geoJson(data, {
  //   style: function(feature) {
  //     return {
  //       color: "white",
  //       fillColor: chooseColor(feature.properties.NAME),
  //       fillOpacity: 0.5,
  //       weight: 1.5
  //     };
  //   }
  // }).addTo(map);

  console.log(data);
});
  

