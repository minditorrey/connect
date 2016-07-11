'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

router.use('/checkIns', require('./checkIns'));
router.use('/situations', require('./situations'));
router.use('/memories', require('./memories'));
router.use('/messages', require('./messages'));
module.exports = router;