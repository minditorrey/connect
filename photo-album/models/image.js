'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');
var Album = require('./album');

var imageSchema = new mongoose.Schema({
	takenBy: { type: String },
	url: { type: String, required: true},
	description: { type: String},
	_albumID: { type: mongoose.Schema.Types.ObjectId, ref: 'Album' }
},
{
	timestamps: true
});

imageSchema.statics.create = function(imageObj, cb) {
	// console.log('album:', $scope.album);
	// Album.findOne({_id: imageObj._album}, (err, dbAlbum) => {
	// 	console.log('dbalb: ', dbAlbum, 'imgobj: ',imageObj);
	// 	if(err || !dbAlbum) {
	// 		cb(err || dbAlbum);
	// 	} 
	console.log(imageObj)
	var image = new Image(imageObj);
	
	image.save((err) => {
		if(err){
			console.log('hello2')
			return cb(err);
		} 
		
	console.log(image)
		Album.findById(image._albumID, (err, album)=>{
			console.log(err)
			if (err) return cb(err)

			album._images.push(image)
			album.save(err=> {
					console.log(err, image)
				if (err) {
					cb(err) 

				}
				else cb(null, image)
			})

		})
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


