var express = require("express");
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose")



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/icdapp");

// Schema Setup

var codeSchema = new mongoose.Schema({
	chapter: Number,
	code: String
});

var Code = mongoose.model("Code", codeSchema);

Code.create({
	chapter: 4,
	code: "test 4"
}, function(err, code){
	if(err){
		console.log("Something is off");
	} else {
		console.log("saved a code");
		console.log(code);
	}
});

// index page 
app.get('/', function(req, res) {
    res.render('pages/styling');
});

// about page 
app.get('/about', function(req, res) {
    res.render('pages/about');
});


var server = app.listen(3000, function (){
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});