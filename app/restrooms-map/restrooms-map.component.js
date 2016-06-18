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
          self.locations = data.locations;
          var map = new google.maps.Map(document.getElementById('map'), {
            center: data.center,
            scrollwheel: false,
            zoom: 16
          });
          console.log("Drew map");
          var infowindows = [];
          
          for (var i = 0; i < data.locations.length; i++) {
            var marker = new google.maps.Marker({
              map: map,
              position: data.locations[i].location,
              title: data.locations[i].name
            });
            var infowindow = new google.maps.InfoWindow();
            infowindows.push(infowindow);
            marker.location = data.locations[i];
            marker.addListener('click', function() {
              console.log("Clicked");
              infowindow.close();
              infowindow.setContent('<div><strong>' + this.location.name + '</strong><br>');
              infowindow.open(map, this);
            })
            //infowindow.open(map, marker);
          }

        })
        
      }]
    }
  );