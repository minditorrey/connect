'use strict';

var express = require('express');
var path = require('path');
var router = express.Router();
var Album = require('../models/album');


// Do Crud Things:
router.get('/', (req, res) => {
  	Album.find({}, (err, albums) => {
    	res.status(err ? 400 : 200).send(err || albums);
  	});
});

router.post('/', (req, res) => {
  	Album.create(req.body, err => {
    	res.status(err ? 400 : 200).send(err);
  	});
});


router.route('/:id')
  	.put((req, res) => {
    	Album.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, image) => {
      		res.status(err ? 400 : 200).send(err || album);
    	})
  	})
    .delete((req, res) => {
    	var album = (req.body)
    	Album.findByIdAndRemove(req.params.id, (err, album) => {
      		res.status(err ? 400 : 200).send(err);
    	})
  	})

module.exports = router;
