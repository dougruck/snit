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

var myLatlng = new google.maps.LatLng(47.717951, -122.309879);

  var marker = new google.maps.Marker({
      position: (myLatlng),
      map: map,
      title: 'Hello World!'
  });
  }
      google.maps.event.addDomListener(window, 'load', initialize);