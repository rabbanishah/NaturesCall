angular.
  module('core.location').
  factory('Location', ['$q',
    function($q) {
      var factory = {};
      var deferred = $q.defer();
      navigator.geolocation.getCurrentPosition(function(position) {
        deferred.resolve(position);
      });
      factory.getLocation = deferred.promise;
      return factory;
    }
  ]);
  