'use strict';

var mongoose = require('mongoose');


var checkInSchema = new mongoose.Schema({
  negativeMood: { type: String, required: true},
  positiveMood: { type: String, required: true},
  concerns: { type: String, required: true},
  needs: { type: String, required: true},
  goals: { type: String, required: true },
  hopes: { type: String, required: true }, 
  thanks: { type: String, required: true},
  date: { type: String }
});


var checkIn = mongoose.model('checkIn', checkInSchema);

module.exports = checkIn;