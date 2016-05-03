var express = require('express');
var router = express.Router();

var Card = require('../models/card');

//Do Crud Things:

// router.get('/', (req, res) => {
// 	Card.find({}, (err, cards) => {
// 		if(err) {
// 			res.status(400).send(err);
// 		} else {
// 			res.send(cards);
// 		}
// 	});
// });

router.post('/', (req, res) => {
	var card = new Card(req.body);

	card.save((err, savedCard) => {
		if(err) {
			res.status(400).send(err);
		} else {
			res.send(savedCard);
		}
	});
});


router.get('/:category', (req, res) => {
	Card.find({category: req.params.category}, (err, cards) => {
		if(err) {
			res.status(400).send(err);
		} else {
			res.send(cards);
		}
	})

})

module.exports = router;