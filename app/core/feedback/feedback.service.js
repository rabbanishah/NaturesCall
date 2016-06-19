angular.
  module('core.feedback').
  factory('Feedback', ['$resource',
    function($resource) {
      return $resource('addRating');
    }
  ]);
  