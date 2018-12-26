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
//  name: 1,
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
// 	},
// 	excludes1: {
// 		note: [
// 			"certain localized infections - see body system-related chapters"
// 		]
// 	},
// 	excludes2: {
// 		note: [
// 			"carrier or suspected carrier of infectious disease (Z22.-)",
//             "infectious and parasitic diseases complicating pregnancy, childbirth and the puerperium (O98.-)",
//             "infectious and parasitic diseases specific to the perinatal period (P35-P39)",
//             "influenza and other acute respiratory infections (J00-J22)"
// 		]
// 	},
// 	sectionIndex: {
// 		sectionRef: [
// 			{
// 			first: "A00",
// 			last: "A09",
// 			id: "A00-A09",
// 			text: "Intestinal infectious diseases"
// 			}
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