var mongoose = require("mongoose");

// Schema Setup

var chapter1Schema = new mongoose.Schema({
	name: String,
	desc: String,
	includes: {
		note: [ 
		String
		]
	},
	useAdditionalCode: {
		note: [
		String
		]
	}
});

// var Code = mongoose.model("Code", codeSchema);

module.exports = mongoose.model("Chapter1", chapter1Schema);