'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/home', require('./home'));


module.exports = router;