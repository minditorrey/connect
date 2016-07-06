var express = require('express');
var router = express.Router();
var stormpath = require('express-stormpath');
var CheckIn = require('../models/checkIn');

router.get('/', (req, res) => {
  CheckIn.find({}, (err, checkIns) => {
    res.status(err ? 400 : 200).send(err || checkIns);
  });
});

router.post('/', (req, res) => {
	console.log(req.body);
  CheckIn.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});


router.route('/:id')
  .put((req, res) => {
    CheckIn.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, checkIn) => {
      res.status(err ? 400 : 200).send(err || checkIn);
    })
  })
  .delete((req, res) => {
    var checkIn = (req.body)
    CheckIn.findByIdAndRemove(req.params.id, (err, checkIn) => {
      res.status(err ? 400 : 200).send(err);
    })

  })

  .get((req, res) => {
    CheckIn.findById(req.params.id, function (err, checkIn) {
    res.status(err ? 400 : 200).send(err || checkIn);
    console.log('checkIn:', checkIn);
  });
});





router.post('/', (req, res) => {
	console.log(req.body);
  CheckIn.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.route('/details/:id')
  	.post((req, res) => {
	console.log('details/id: req.body:', req.body)
    CheckIn.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, checkIn) => {
      res.status(err ? 400 : 200).send(err || checkIn);
    })
  })

router.route('/users/:username')
	.get((req, res) => {
		console.log(req.params.username)
		CheckIn
		.find({username: req.params.username})
		.exec((err, checkIns) => {
			console.log(checkIns)
			res.status(err ? 400 : 200).send(err || checkIns);
		})
	})

module.exports = router;