var express = require("express");
var router = express.Router();
var User = require("../models/codes");

// Route - Show all chapters
app.get('/chapters', function(req, res){
	//Get all chapters from DB
	Code.find({}, function(err, allCodes){
		if(err){
			console.log(err);
		} else {
			console.log(allCodes);
			res.render("pages/chapter", {codes:allCodes});
		}
	})
});