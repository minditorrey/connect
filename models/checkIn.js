'use strict';

var mongoose = require('mongoose');


var checkInSchema = new mongoose.Schema({
  mood: { type: String, required: true},
  grateful: { type: String, required: true},
  concerns: { type: String, required: true},
  needs: { type: String, required: true },
  goals: { type: String, required: true }, 
  date: { type: String, required: true},
  url: { type: String },
  share: { type: String }
});


var checkIn = mongoose.model('checkIn', checkInSchema);

module.exports = checkIn;