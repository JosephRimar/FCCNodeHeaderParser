'use strict'

var express = require('express');
var app = express();
var infoParser = require('./infoparser.js');
var PORT = process.env.PORT || 3000;

app.use('*', function(req, res) {
	res.end(JSON.stringify(infoParser.headerParser(req, res)));
});

//Error handler for bad paramters  ie. "%"
app.use(function(err, req, res, next) {
	console.log(err);
	res.end("The URL you entered was invalid");
});

app.listen(process.env.PORT || 3000);
console.log("Server running on port " + PORT);