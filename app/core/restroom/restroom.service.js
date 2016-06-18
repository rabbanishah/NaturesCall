angular.
  module('core.restroom').
  factory('Restroom', ['$resource', '$q', 'Location',
    function($resource, $q, Location) {
      return Location.getLocation.then(function (data) {
        return $resource('http://139.59.9.45:3000/query', {}, {
          query: {
            method: 'GET',
            params: {lat: data.coords.latitude, lng: data.coords.longitude},
            isArray: true
          }
        }).query().$promise;
//        locationQuery.center = {lat: data.coords.latitude, lng: data.coords.longitude};
//        return locationQuery;
        
      });
    }
  ]);