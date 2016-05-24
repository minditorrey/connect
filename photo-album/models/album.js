'use strict';

var mongoose = require('mongoose');
var jwt = require('jsonwebtoken');



var albumSchema = new mongoose.Schema({
  	name: { type: String, required: true, unique: true },
  	createdBy: { type: String },
	_images: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }]
}, 
{
 timestamps: true
});

// albumSchema.statics.create = function(albumObj, cb) {
// 	this.create(albumObj, cb);
// };



albumSchema.statics.edit = function(ablumObj, cb) {

}

albumSchema.statics.delete = function(albumObj, cb) {

	Album.findOne({_id: albumObj._id}, (err, dbAlbum) => {
	    if(err || !dbAlbum) {
	        return cb(err || {error: 'Album does not exist'});
	     }
	
	    Image.findById({_album: albumObj._id}, (err, dbImage) => {
	        if(err || !dbImage) { return cb(err || {error: 'Image does not exist.'}); }
	
	       	dbImage.remove(err => {
	            dbAlbum.remove(cb(err));
	        });
	    });
    });
}


var Album = mongoose.model('Album', albumSchema);

module.exports = Album;


