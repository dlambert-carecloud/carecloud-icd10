var express = require("express");
var router = express.Router();
var User = require("../models/codes");

// Route
app.get('/', function(req, res) {
    res.render('pages/styling');
});