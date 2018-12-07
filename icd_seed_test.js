mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/icdapp");

var codeSchema = new mongoose.Schema({
	chapter: [{
		name: String,
		desc: String
	}]
});

var Code = mongoose.model("Code", codeSchema);

// var testcode = new Code ({
// 	chapter: 2,
// 	code: "test 2"
// });

// testcode.save(function(err, code){
// 	if(err){
// 		console.log("Something is off")
// 	} else {
// 		console.log("saved a code")
// 		console.log(code);
// 	}
// });

Code.create({
    "chapter": [
      {
        "name": "1",
        "desc": "Certain infectious and parasitic diseases (A00-B99)"
      }
    ]
}, function(err, code){
	if(err){
		console.log("Something is off");
	} else {
		console.log("saved a code");
		console.log(code);
	}
});


// Code.find({}, function(err, codes){
// 	if(err){
// 		console.log("Something is off");
// 		console.log(err);
// 	} else {
// 		console.log("All the codes...");
// 		console.log(codes);
// 	}
// });