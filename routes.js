var places = require('./places.js')
module.exports = function(app) {
    app.get('/', function(req, res) {
        places('13.0311', '77.5652', function(details) {
            res.end(JSON.stringify(details))
        })
    });
}
