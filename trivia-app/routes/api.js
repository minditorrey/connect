'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/cards', require('./cards'));

module.exports = router;