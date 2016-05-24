

'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


var userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  passwo
  rd: { type: String, required: true }
});

var User = mongoose.model('User', userSchema);

module.exports = User;

