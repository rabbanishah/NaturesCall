var express = require('express')
var app = express()
var mongoose = require('mongoose');
require('express-mongoose');
var models = require('./models/toilet.js')
var routes = require('./routes');
mongoose.connect('mongodb://localhost/naturescall', function(err) {
    if (err) throw err;
    console.log("Connected!")
    var app = express();
    routes(app);
    app.listen(3000, function() {
        console.log("Listening on port 3000");
    });
})
