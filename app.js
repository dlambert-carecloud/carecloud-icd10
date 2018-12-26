var express = require("express");
	app = express(),
	bodyParser = require("body-parser"),
	mongoose = require("mongoose"),
	// Code = require("./models/codes")
	Chapter = require("./models/chapter1")



app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect("mongodb://localhost/icdapp");


// Chapter.create({
//  	name: 1,
// 	desc: "Certain infectious and parasitic diseases (A00-B99)",
// 	includes: {
// 		note: [
// 			"diseases generally recognized as communicable or transmissible"
// 		]
// 	},
// 	useAdditionalCode: {
// 		note: [
// 			"code to identify resistance to antimicrobial drugs (Z16.-)"
// 		]
// 	}
// }, function(err, chapter){
// 	if(err){
// 		console.log("Something is off");
// 	} else {
// 		console.log("saved a code");
// 		console.log(chapter);
// 	}
// });



// requiring routes
var indexRoutes = require("./routes/index"),
	chapterRoutes = require("./routes/chapters")
	

var server = app.listen(3000, function (){
  console.log("Calling app.listen's callback function.");
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});