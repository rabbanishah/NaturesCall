'use strict';

angular.
  module('restroomsMap').
  component('restroomsMap', {
    templateUrl: 'restrooms-map/restrooms-map.template.html',
    controller: ['$window', 'Restroom', 'Location',
      function RestroomsMapController($window, Restroom, Location) {
        var self = this;
        Restroom.then(function(data) {
          console.log(data);
          self.locations = data;
          var map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: -35, lng: 151.2195},
            scrollwheel: false,
            zoom: 4
          });
          console.log("Drew map");
          for (var i = 0; i < data.length; i++) {
            var marker = new google.maps.Marker({
              map: map,
              position: data[i].location,
              title: 'Hello World!'
            });
          }

        })
        
      }]
    }
  );