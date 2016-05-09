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



module.exports = router;