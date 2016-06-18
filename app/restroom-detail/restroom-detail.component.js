angular.
  module('restroomDetail').
  component('restroomDetail', {
    template: 'TBD: Detail view for <span>{{$ctrl.restroomId}}</span>',
    controller: ['$routeParams',
      function RestroomDetailController($routeParams) {
        this.restroomId = $routeParams.restroomId;
      }
    ]
  });