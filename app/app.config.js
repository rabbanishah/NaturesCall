angular.
  module('naturesCall').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/restrooms', {
          template: '<restrooms-map></restrooms-map>'
        }).
        when('/restroom/:restroomId', {
          template: '<restroom-detail></restroom-detail>'
        }).
        otherwise('/restrooms');
    }
  ]);