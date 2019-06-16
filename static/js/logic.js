// UAS map
var myMap = L.map('map').setView([37.8, -96], 4);
  
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);

  var mapStyle = {
    color: "white",
    fillColor: "red",
    fillOpacity: 0.3,
    weight: 1.5
  };


  
  // Read the data.geojson file
  d3.json("data.geojson", function(data) {
    console.log(data);
    L.geoJson(data, {
      style: mapStyle,
      onEachFeature: function(feature, layer) {
        layer.on({
          mouseover: function(event) {
            layer = event.target;
            layer.setStyle({fillOpacity: 0.5});
            layer.bindPopup("<h1>" + feature.properties.NAME + "</h1><hr><h2>" + feature.properties.Obesity + "% Obesity</h2>");
          },
          // Reset in mouse out
          mouseout: function(event) {
            layer = event.target;
            layer.setStyle({fillOpacity: 0.3});
          }
        })
      }
    }).addTo(myMap);

  });
    
  
  