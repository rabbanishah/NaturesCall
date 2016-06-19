'use strict';

angular.
  module('restroomsMap').
  component('restroomsMap', {
    templateUrl: 'restrooms-map/restrooms-map.template.html',
    controller: ['$scope', '$location', '$window', 'Restroom', 'Location', 'Feedback',
      function RestroomsMapController($scope, $location, $window, Restroom, Location, Feedback) {
        $scope.giveFeedback = function(restroom) {
          if (!restroom.clicked) {
            restroom.clicked = true;
            $window.open('https://maps.google.com/maps?q=loc:'+this.location.location.lat+','+this.location.location.lng);
          }
          
        }
        $scope.submitFeedback = function(restroom) {
          console.log("Feedback submitted");
          Feedback.get({place_id: restroom.place_id, rate: restroom.rate});
          restroom.submitted = true;
        }
        var self = this;
        Restroom.then(function(data) {
          console.log(data);
          self.locations = data.locations;
          var map = new google.maps.Map(document.getElementById('map'), {
            center: data.center,
            scrollwheel: false,
            zoom: 16,
          });
          console.log("Drew map");
          var infowindows = [];
          
          for (var i = 0; i < data.locations.length; i++) {
            var marker = new google.maps.Marker({
              map: map,
              position: data.locations[i].location,
              title: data.locations[i].name,
              icon: 'icons/natures-call.png'
            });
            var infowindow = new google.maps.InfoWindow();
            infowindows.push(infowindow);
            marker.location = data.locations[i];
            marker.addListener('click', function() {
              console.log("Clicked");
              infowindow.close();
              infowindow.setContent('<div><strong>' + this.location.name 
                                    + '</strong><br>' 
                                    + '<a href="https://maps.google.com/maps?q=loc:'+this.location.location.lat+','+this.location.location.lng+'">Get Directions</a>');
              infowindow.open(map, this);
            })
          }
          var myLocation = new google.maps.Marker({
              map: map,
              position: data.center,
              title: 'My location',
              icon: 'icons/bullet_blue.png'
          });
        })
        
      }]
    }
  );