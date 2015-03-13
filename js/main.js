var sites = {
    "stps": [
        {
            "name": "Bothell-3",
            "address": "18715 120th Ave NE",
            "city": "Bothell",
            "state": "WA",
            "zip": "98021",
            "location" : "47.764047,-122.178302"
        },
        {
            "name": "Bothell-9",
            "address": "20307 N Creek Pkwy",
            "city": "Bothell",
            "state": "WA",
            "zip": "98011",
            "location" : "47.774568,-122.188956"
        },
        {
            "name": "Sacramento",
            "address": "10000 Goethe Way",
            "city": "Sacramento",
            "state": "WA",
            "zip": "95827",
            "location" : "38.552673,-121.329446"
        }
    ]
}






var styles = [
  {
    stylers: [
      { hue: "#00ffe6" },
      { saturation: -20 }
    ]
  },{
    featureType: "road",
    elementType: "geometry",
    stylers: [
      { lightness: 100 },
      { visibility: "simplified" }
    ]
  },{
    featureType: "road",
    elementType: "labels",
    stylers: [
      { visibility: "off" }
    ]
  }
];

$(window).on('resize', function() {
    var currCenter = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(currCenter);
})


 

      function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var mapOptions = {
          center: new google.maps.LatLng(40.169865, -94.590600),
          zoom: 4,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
        map.setOptions({styles: styles});

//var temp = sites.stps[1].location.split(",");
//console.log(temp[0],",",temp[1]);
//var myLatlng = new google.maps.LatLng(temp[0],temp[1]);

for (var node in sites.stps) {
  console.log(sites.stps[node].location);
  var temp = sites.stps[node].location.split(",");
  var myLatlng = new google.maps.LatLng(temp[0],temp[1]);
  var marker = new google.maps.Marker({
      position: (myLatlng),
      map: map,
      title: sites.stps[node].name,
  });

}

  /*var marker = new google.maps.Marker({
      position: (myLatlng),
      map: map,
      title: 'Hello World!'
  });*/
  }
      google.maps.event.addDomListener(window, 'load', initialize);