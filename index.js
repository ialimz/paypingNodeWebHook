/**
 * Created by Ali Moazenzadeh on 7/8/17.
 */
var express = require("express");
var bodyParser = require("body-parser");
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./routes/routes.js")(app);

var server = app.listen(3333, function () {
    console.log("Listening on port %s...", server.address().port);
});
