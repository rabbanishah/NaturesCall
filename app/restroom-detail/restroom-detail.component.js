angular.
  module('restroomDetail').
  component('restroomDetail', {
    templateUrl: 'restroom-detail/restroom-detail.template.html',
    controller: ['$routeParams',
      function RestroomDetailController($routeParams) {
        this.restroomId = $routeParams.restroomId;
      }
    ]
  });