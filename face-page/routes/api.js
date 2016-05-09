'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/users', require('./users'));


module.exports = router;