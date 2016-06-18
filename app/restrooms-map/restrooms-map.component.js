'use strict';

angular.
  module('restroomsMap').
  component('restroomsMap', {
    templateUrl: 'restrooms-map/restrooms-map.template.html',
    controller: ['Restroom', 'Location',
      function RestroomsMapController(Restroom, Location) {
        Restroom.then(function(data) {
          console.log(data.query());
        })
      }]
    }
  );