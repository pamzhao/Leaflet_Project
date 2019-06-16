// UAS map
var myMap = L.map('map').setView([37.8, -96], 4);
  
  // Adding tile layer
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap);

  // var mapStyle = {
  //   color: "white",
  //   fillColor: "red",
  //   fillOpacity: 0.3,
  //   weight: 1.5
  // };

  function setColor(rate) {
    if (rate > 0 && rate < 10) {
        return "green";
    } else if (rate >= 10 && rate < 20) {
      return "yellow";
    } else if (rate >= 20 && rate < 30) {
      return "orange";
    } else if (rate >= 30 && rate < 40) {
      return "red";
    } else if (rate >= 40 && rate < 50) {
    return "red";
  } else {
      return "black";
    }
  }
  
  // Read the data.geojson file
  d3.json("data.geojson", function(data) {
    console.log(data);
    L.geoJson(data, {
      style: function(feature) {
        return {
          color: "white",
          fillColor: setColor(feature.properties.Obesity),
          fillOpacity: 0.5,
          weight: 1.5
        };
      },
      onEachFeature: function(feature, layer) {
        layer.on({
          mouseover: function(event) {
            layer = event.target;
            layer.setStyle({fillOpacity: 0.8});
            layer.bindPopup("<h1>" + feature.properties.NAME + "</h1><hr><h2>" + feature.properties.Obesity + "% Obesity</h2>");
          },
          // Reset in mouse out
          mouseout: function(event) {
            layer = event.target;
            layer.setStyle({fillOpacity: 0.5});
          }
        })
      }
    }).addTo(myMap);

  });
    
  
  