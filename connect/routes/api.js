'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/checkIns', require('./checkIns'));


module.exports = router;