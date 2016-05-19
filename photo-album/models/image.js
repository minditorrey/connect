'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var Album = require('./album');


var imageSchema = new mongoose.Schema({
  url: { type: String, required: true, unique: true },
  description: { type: String, required: true }
},
{
 timestamps: true
});

imageSchema.statics.create = function(imageObj, cb) {

	// Album.findOne({_id: imageObj._album}, (err, dbAlbum) => {
	// 	console.log('dbalb: ', dbAlbum, 'imgobj: ',imageObj);
	// 	if(err || !dbAlbum) {
	// 		cb(err || dbAlbum);
	// 	} 
	    var image = new Image({
	       	url: imageObj.url,
	       	description: imageObj.description
	    });
	
	    image.save((err, savedImage) => {
	    if(err || !savedImage){
			cb(err || savedImage);
		} 
	       	// dbAlbum._images.push(image._id);
	       	// dbAlbum.save(cb(err, savedImage));
	    });
	// });
};

imageSchema.statics.edit = function(imageObj, cb) {

	Image.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, task) => {
      res.status(err ? 400 : 200).send(err || image);
    })

  	.delete((req, res) => {
    	var image = (req.body)
    	Image.findByIdAndRemove(req.params.id, (err, image) => {
      		res.status(err ? 400 : 200).send(err);
    	})
  	})
}







var Image = mongoose.model('Image', imageSchema);

module.exports = Image;


