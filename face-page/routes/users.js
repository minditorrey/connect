var express = require('express');
var router = express.Router();

var User = require('../models/user');
var Profile = require('../models/profile')


//Do Crud Things:
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    res.status(err ? 400 : 200).send(err || users);
  });
});

//   /api/users/register
router.post('/register', (req, res) => {
  User.register(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.post('/login', (req, res) => {
  User.authenticate(req.body, (err, token) => {
    if (err) return res.status(400).send(err);
    res.cookie('accessToken', token).send(token);
  });
});

router.delete('/logout', (req, res) => {
  res.clearCookie('accessToken').send();
});

router.get('/profiles', User.isLoggedIn, (req, res) => {
	res.send(req.user);
});

router.post('/profiles', (req, res) => {
  Profile.create(req.body, err => {
    res.status(err ? 400 : 200).send(err);
  });
});

router.route('/:id')
  .delete((req, res) => {
    var user = (req.body)
    User.findByIdAndRemove(req.params.id, (err, user) => {
      res.status(err ? 400 : 200).send(err);
    })
  })
  .put((req, res) => {
    User.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, user) => {
      res.status(err ? 400 : 200).send(err || user)
    })
  })


module.exports = router;