var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');
var Memory = require('../models/memory');

router.get('/', (req, res) => {
  	Memory.find({}, (err, memories) => {
    	res.status(err ? 400 : 200).send(err || memories);
  	});
});

router.post('/', (req, res) => {
	console.log(req.body);
  	Memory.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});


module.exports = router;