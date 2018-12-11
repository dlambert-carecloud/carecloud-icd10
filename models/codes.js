var mongoose = require("mongoose");

// Schema Setup

var codeSchema = new mongoose.Schema({
	chapter: Number,
	code: String
});

// var Code = mongoose.model("Code", codeSchema);

module.exports = mongoose.model("Code", codeSchema);