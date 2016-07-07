'use strict';

var mongoose = require('mongoose');


var memorySchema = new mongoose.Schema({
  url: {type: String, required: true},
  description: {type: String, required: true},
  date: {type : Date, default : Date.now}
});


var memory = mongoose.model('memory', memorySchema);

module.exports = memory;