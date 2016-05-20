'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();

var Image = require('../models/image');
var Album = require('../models/album');



router.get('/', (req, res) => {
  	Image.find({}, (err, images) => {
    	res.status(err ? 400 : 200).send(err || images);
  	});
});

router.post('/', (req, res) => {
  	Image.create(req.body, err => {
    	res.status(err ? 400 : 200).send(err);
  	});
});


router.route('/:id')
  	.put((req, res) => {
    	Image.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, image) => {
      		res.status(err ? 400 : 200).send(err || image);
    	})
  	})
    .delete((req, res) => {
    	var image = (req.body)
    	Image.findByIdAndRemove(req.params.id, (err, image) => {
      		res.status(err ? 400 : 200).send(err);
    	})
  	})
    .get((req, res) => {
      Image.findById(req.params.id, function (err, image) {
      res.status(err ? 400 : 200).send(err || image);
      console.log('this image:', image);
  });
});

module.exports = router;
