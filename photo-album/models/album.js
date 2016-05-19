'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');


const JWT_SECRET = process.env.JWT_SECRET;

if(!JWT_SECRET) {
  throw new Error('Missing JWT_SECRET');
}

var albumSchema = new mongoose.Schema({
  	name: { type: String, required: true, unique: true },
	_images: [{
    	images: { type: mongoose.Schema.Types.ObjectId, ref: 'Image' },
 	}]
}, 
{
 timestamps: true
});

var Album = mongoose.model('Album', albumSchema);

module.exports = Album;


