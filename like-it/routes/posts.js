var express = require('express');
var router = express.Router();

var Post = require('../models/post');

router.get('/', (req, res) => {
  Post.find({}, (err, posts) => {
    res.status(err ? 400 : 200).send(err || posts);
  });
});

//   /api/users/register
router.post('/', (req, res) => {
  Post.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.route('/:id')
	.delete((req, res) => {
		var post = (req.body)
		Post.findByIdAndRemove(req.params.id, (err, post) => {
			res.status(err ? 400 : 200).send(err);
		})
	})



module.exports = router;