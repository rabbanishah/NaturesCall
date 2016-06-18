var places = require('./places.js')
module.exports = function(app) {
    app.get('/query', function(req, res) {
    	var lat = req.query.lat
    	var lng = req.query.lng
        places(lat, lng , function(details) {
            res.end(JSON.stringify(details))
        })
    });
}
