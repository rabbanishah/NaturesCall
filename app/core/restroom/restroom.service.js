angular.
  module('core.restroom').
  factory('Restroom', ['$resource', '$q', 'Location',
    function($resource, $q, Location) {
      return Location.getLocation.then(function (locationData) {
        return $resource('http://139.59.9.45:3000/query', {}, {
          query: {
            method: 'GET',
            params: {lat: locationData.coords.latitude, lng: locationData.coords.longitude},
            isArray: true
          }
        }).query().$promise.then(function (data) {
          console.log(locationData);
          var returnVal = {};
          returnVal.locations = data;
          returnVal.center = {lat: locationData.coords.latitude, lng: locationData.coords.longitude};
          return returnVal;
        });
//        locationQuery.center = {lat: data.coords.latitude, lng: data.coords.longitude};
//        return locationQuery;
        
      });
    }
  ]);