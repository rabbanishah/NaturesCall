angular.
  module('naturesCall').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/home', {
          templateUrl: 'home.html'
        }). 
        when('/restrooms', {
          template: '<restrooms-map></restrooms-map>'
        }).
        when('/restroom/:restroomId', {
          template: '<restroom-detail></restroom-detail>'
        }).
        otherwise('/home');
    }
  ]);