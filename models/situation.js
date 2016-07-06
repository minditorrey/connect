'use strict';

var mongoose = require('mongoose');


var situationSchema = new mongoose.Schema({
  event: {type: String, required: true},
  thoughts: {type: String, required: true},
  feelings: {type: String, required: true},
  behaviors: {type: String, required: true},
  beliefs: {type: String, required: true},
  effects: {type: String, required: true},
  meanings: {type: String, required: true},
  potential: {type: String, required: true},
  resolution: {type: String, required: true},
  date: {type : Date, default : Date.now}
});


var situation = mongoose.model('situation', situationSchema);

module.exports = situation;