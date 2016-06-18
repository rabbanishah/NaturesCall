var places = require('../places.js')
var mongoose = require('mongoose');
var Toilet = mongoose.model('Toilet');
//var finish = require('finish');

function queryToilets(toilets)  {
    return new promise()
}

module.exports = function(app) {
    app.get('/query', function(req, res) {
    	var lat = req.query.lat
    	var lng = req.query.lng
        places(lat, lng , function(toilets) {
            var numLoop = toilets.length

            for(var i=0 ; i < toilets.length; i++)    {
                console.log(toilets[i])
                Toilet.exists(toilets[i].place_id,i , function(err, iter, stat)  {
                    if(err) {
                        console.log("error finding toilet")
                        return
                    }
                    if(stat)  {
                        Toilet.findOne({place_id: toilets.place_id}, function(err, doc) {
                                toilets[iter].pee = doc.pee
                                toilets[iter].poop = doc.poop
                                toilets[iter].clean = doc.clean
                                toilets[iter].access = doc.access
                                toilets[iter].rate = doc.rate

                                //cnt ++
                            })
                    }else {
                        toilets[iter].pee = '-1'
                        toilets[iter].poop = '-1'
                        toilets[iter].clean = '-1'
                        toilets[iter].access = -1
                        toilets[iter].rate = -1
                        //cnt ++
                    }
                })
            }
            //while(cnt!=toilets.length);
            res.end(JSON.stringify(toilets))
        })
    });
}
// toilet={}
// toilet.place_id = details.place_id
// toilet.name = details.name
// toilet.pee = '4'
// toilet.poop = '3'
// toilet.clean = '5'
// toilet.access = '3'
// toilet.rate = '3.5'
// console.log(toilet)
// Toilet.insertToilet(toilet,function(stat,doc){})
