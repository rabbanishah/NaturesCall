var mongoose = require('mongoose');

//defining the schema of the DB
var toiletSchema = mongoose.Schema({
    place_id: String,
    //name: String,
    // pee: String,
    // poop: String,
    // clean: String,
    // access: String,
    rate: String,
    numberOfRating: Number
});

toiletSchema.statics.exists = function(place_id, callback) {

    this.model('Toilet').count({place_id: place_id}, function (err, count) {
        if(err) {
            console.log("Toilet Count error")
            callback(err,iter, null)
            return;
        }
        //console.log(iter)
        //console.log("checking exists")
        if(count > 0)  {
            callback(null, true);
        }else {
            callback(null, false);
        }
    } );
}

toiletSchema.statics.insertToilet = function(toilet, callback)  {
    var toilet = new this(toilet);
    toilet.save(function(err, doc) {
        if(err) {
            console.log("error inserting toilet");
            callback(err, doc);
        } else {
            console.log("New toilet inserted into DB");
            callback(null, doc);
        }
    });
 }

 toiletSchema.statics.updateToilet = function(toilet, callback) {
    var place_id = toilet.place_id;
    var query = {place_id: place_id}
    this.update(query, toilet, function(err, numAffected)  {
        if(err) {
            console.log("Error Updating toilet in DB");
            callback(err, null)
        }else {
            console.log("Toilet updated in db");
            callback(null, numAffected)
        }
    });
}
module.exports = mongoose.model('Toilet', toiletSchema);
