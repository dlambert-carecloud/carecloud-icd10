var express = require("express");
var router = express.Router();
var Chapter = require("../models/chapter1");

// Route - Show all chapters
app.get('/chapters', function(req, res){
	//Get all chapters from DB
	Chapter.find({}, function(err, allChapters){
		if(err){
			console.log(err);
		} else {
			console.log(allChapters);
			res.render("pages/chapter", {chapters:allChapters});
		}
	})
});