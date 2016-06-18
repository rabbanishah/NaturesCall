angular.
  module('core.restroom').
  factory('Restroom', ['$resource', '$q', 'Location',
    function($resource, $q, Location) {
      return Location.getLocation.then(function (data) {
        return $resource('http://google.com', {}, {
          query: {
            method: 'GET',
            params: {lat: data.coords.latitude, lon: data.coords.longitude},
            isArray: true
          }
        });
      });
    }
  ]);