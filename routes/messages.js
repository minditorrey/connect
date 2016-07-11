var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');
var Message = require('../models/message');

router.get('/', (req, res) => {
  	Message.find({}, (err, messages) => {
    	res.status(err ? 400 : 200).send(err || messages);
  	});
});

router.post('/', (req, res) => {
	console.log(req.body);
  	Message.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});


module.exports = router;