module.exports = function(lat,lon,callback) {
    var request = require('request');
    var geolib = require('geolib');
    var radius = 1000
    var API_KEY = 'AIzaSyBFyE2lyxTcqMNByJnY3WqUgyOjtNTiJ44'
    //var lat = '13.0311'
    //var lon = '77.5652'
    var type = 'hospital'
    var name = 'KFC | hospital |BurgerKing | CafeCoffeeDay | McDonalds | '
    var rankby = 'distance'
    var keyword = 'McDonalds'
    var url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' + lat + ',' + lon + '&radius=' + radius + '&name=' + name + '&key=' + API_KEY
    //console.log(url)
    request(url, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            // Show the HTML for the Google homepage.
            body = JSON.parse(body)
                //console.log(body)
            places = body["results"]
                //console.log(places)
            details = []
            for (var i = 0; i < places.length; i++) {
                temp = {}
                temp.name = places[i].name
                //temp.type = places[i].types
                temp.location = places[i].geometry.location
                temp.place_id = places[i].place_id
                temp.distance = geolib.getDistance({
                        'latitude': lat,
                        'longitude': lon
                    }, {
                        'latitude': temp.location.lat,
                        'longitude': temp.location.lng
                    })
                    //temp.vic = places[i].vicinity
                details.push(temp)
                temp.clear
            }
            details.sort(function(a, b) {
                return parseFloat(a.distance) - parseFloat(b.distance)
            })
            //console.log(details)
            callback(details)
        }
    })
}
