var express = require('express');
var passport = require('passport');
var User = require('../models/user');
var router = express.Router();
var Likes = require('../models/likes');
var mongoose = require('mongoose');

module.exports = router;
