var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');
var Situation = require('../models/situation');

router.get('/', (req, res) => {
  	Situation.find({}, (err, situations) => {
    	res.status(err ? 400 : 200).send(err || situations);
  	});
});

router.post('/', (req, res) => {
	console.log(req.body);
  	Situation.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.route('/:id')
  .put((req, res) => {
    Situation.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, situation) => {
      res.status(err ? 400 : 200).send(err || situation);
    })
  })
  .delete((req, res) => {
    var situation = (req.body)
    Situation.findByIdAndRemove(req.params.id, (err, situation) => {
      res.status(err ? 400 : 200).send(err);
    })

  })

  .get((req, res) => {
    Situation.findById(req.params.id, function (err, situation) {
    res.status(err ? 400 : 200).send(err || situation);
    console.log('situation:', situation);
  });
});

module.exports = router;