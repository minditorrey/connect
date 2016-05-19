'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


const JWT_SECRET = process.env.JWT_SECRET;

if(!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET');
}

var imageSchema = new mongoose.Schema({
  url: { type: String, required: true, unique: true },
  description: { type: String, required: true }
},
{
 timestamps: true
});

var Image = mongoose.model('Image', imageSchema);

module.exports = Image;