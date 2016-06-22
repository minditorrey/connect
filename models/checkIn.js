'use strict';

var mongoose = require('mongoose');


var checkInSchema = new mongoose.Schema({
  positiveMood: { type: String, required: true},
  negativeMood: { type: String, required: true},
  concernName: { type: String, required: true},
  concernDescription: { type: String, required: true},
  needName1: { type: String, required: true},
  needDescription1: { type: String, required: true},
  needName2: { type: String },
  needDescription2: { type: String },
  goalName1: { type: String, required: true },
  goalDescription1: { type: String, required: true },
  goalName2: { type: String },
  goalDescription2: { type: String },
  hopeName1: { type: String, required: true }, 
  hopeDescription1: { type: String, required: true }, 
  hopeName2: { type: String }, 
  hopeDescription2: { type: String }, 
  thanksName1: { type: String, required: true },
  thanksDescription1: { type: String, required: true },
  thanksName2: { type: String },
  thanksDescription2: { type: String },
  date: {type : Date, default : Date.now}
});


var checkIn = mongoose.model('checkIn', checkInSchema);

module.exports = checkIn;