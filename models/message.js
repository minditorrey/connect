'use strict';

var mongoose = require('mongoose');


var messageSchema = new mongoose.Schema({
  post: {type: String, required: true},
  username: {type: String, required: true},
  date: {type : Date, default : Date.now}
});


var message = mongoose.model('message', messageSchema);

module.exports = message;