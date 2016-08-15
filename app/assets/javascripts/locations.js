$(document).ready(function (){

    function initialize() {
      var myLatLng = new google.maps.LatLng(latitude, longitude);

      var mapOptions = {
        center: myLatlng,
        zoom: 15,
        scrollwheel: false
      }

      var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
      var image = "<%= asset_path 'peach.png'%>"
      var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        icon: image,
        animation: google.maps.Animation.DROP
      });
      var contentString = '<h2>'+ my_location +'</h2>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

      google.maps.event.addListener(marker, 'click', function() {
         infowindow.open(map,marker);
      });
    }

  google.maps.event.addDomListener(window, 'load', initialize);

});
