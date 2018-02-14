"use strict";

function initMap() {
  var map = document.querySelector('#map');
  var chords = { lat: 59.938756, lng: 30.3230691 };
  var image = {
    url: '/img/additional-icon/icon-map-marker.svg',
    size: new google.maps.Size(36, 36),
    anchor: new google.maps.Point(15, 15)
  };

  var map = new google.maps.Map(map, { zoom: 16, center: chords });
  var marker = new google.maps.Marker( { position: chords, map: map, icon: image, title: 'Pink' });
}
