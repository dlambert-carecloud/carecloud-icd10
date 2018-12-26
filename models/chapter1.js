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
	},
	excludes1: {
		note: [
		String
		]
	},
	excludes2: {
		note: [
		String
		]
	},
	sectionIndex: {
		sectionRef: [
			{
			first: String,
			last: String,
			id: String,
			text: String
			}
		]
	}
});

// var Code = mongoose.model("Code", codeSchema);

module.exports = mongoose.model("Chapter1", chapter1Schema);