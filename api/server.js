var express = require('express');
var app = express();
var fs = require("fs");
var content = require('./conf/content.json');
var header = require('./conf/header.json');
var users = require('./conf/userinfo.json');



app.get('/getContents', function (req, res) {
	res.json(content);
})

app.get('/Content/:id', function (req, res) {
	
	var id = parseInt(req.params.id) - 1;
	
     res.json(content.contentjson[id]);
   
})

app.get('/getHeader', function (req, res) {
	res.json(header);
})

app.get('/getTags', function (req, res) {
	var tag={};
	//console.log(content["blog1"].hasOwnProperty("tags"));
	Object.keys(content).forEach(function(key) {
    tag = tag+ JSON.stringify(content[key].tags);
});
    console.log(typeof tag);
	res.json(tag);
})

app.get('/Tag/:id', function (req, res) {
	console.log(con);
})

app.get('/getUsers', function (req, res) {
	res.json(users);
})

app.get('/User/:id', function (req, res) {
	var id = parseInt(req.params.id) - 1;
	res.json(users.Users[id]);
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Blog API running at http://%s:%s", host, port)

})