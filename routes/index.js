var places = require('../places.js')
var mongoose = require('mongoose');
var Toilet = mongoose.model('Toilet');
var promise = require('promise');

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.end("WELCOME TO Natures Call")
    })
    app.get('/query', function(req, res) {
        var lat = req.query.lat
        var lng = req.query.lng
        places(lat, lng, function(toilets) {
            var toiletPromises = [];
            toilets.forEach(function(toilet) {
                toiletPromises.push(new Promise(function(resolve, reject) {
                    Toilet.exists(toilet.place_id, function(err, stat) {
                        if (err) {
                            console.log("error finding toilet")
                            return
                        }
                        if (stat) {
                            Toilet.findOne({
                                place_id: toilet.place_id
                            }, function(err, doc) {
                                // toilet.pee = doc.pee
                                // toilet.poop = doc.poop
                                // toilet.clean = doc.clean
                                // toilet.access = doc.access
                                toilet.rate = doc.rate
                                resolve('done')
                                    //cnt ++
                            })
                        } else {
                            // toilet.pee = '-1'
                            // toilet.poop = '-1'
                            // toilet.clean = '-1'
                            // toilet.access = -1
                            toilet.rate = -1
                            resolve('done')
                        }
                    })
                }));
            })
            Promise.all(toiletPromises).then(function(values) {
                res.end(JSON.stringify(toilets))
            })
        })
    });
    app.get('/addRating', function(req, res) {
        var place_id = req.query.place_id
        var rate = req.query.rate
        Toilet.exists(place_id, function(err, stat) {
            if (err) {
                console.log("exist error")
                return
            }
            if (stat) {
                Toilet.findOne({
                    place_id: place_id
                }, function(err, doc) {
                    var sum = (parseFloat(doc.rate) * doc.numberOfRating) + parseFloat(rate)
                    doc.numberOfRating = doc.numberOfRating + 1
                    doc.rate = (sum / doc.numberOfRating).toFixed(2)
                    Toilet.updateToilet(doc, function(err, numAffected) {
                        if (err) {
                            console.log("error review")
                            return
                        }
                        res.end("Review updated" + numAffected)
                    })
                })
            } else {
                toilet = {
                    place_id: place_id,
                    rate: rate,
                    numberOfRating: 1
                }
                Toilet.insertToilet(toilet, function(err, doc) {
                    if (err) {
                        console.log("error inserting")
                        return
                    }
                    res.end("review added" + doc)
                })
            }
        })
        res.end("done")
    })
    app.get('*', function(req, res) {
        res.end("done")
    })
}
