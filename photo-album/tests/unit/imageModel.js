'use strict';

var expect = require('chai').expect;

var Image = require('../../models/image');
var Album = require('../../models/album');


const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/photoApp';

before(function(cb) {
	mongoose.connection.close(function() {
		mongoose.connect(dbUrl, cb);
	});
});

beforeEach(function(cb) {
	Image.remove({}, err => {
		// var albumObj= 	{name: 'my album'}
		// Album.create(albumObj, function(err, album) {
		// 	if(err) cb(err);
			Image.create({
				url: 'https://pixabay.com/static/uploads/photo/2016/01/14/01/41/image-view-1139204_960_720.jpg', description: 'Nice pic of grass.'
			}, (err, image) => {
				cb();

			});
				cb();
		})
	})
// });


describe('Image', function() {
	describe('.create()', function() {

		it('should create a new image in the db.', function(cb) {
			var imageObj = {url: "http://i.imgur.com/YOnKbIy.jpg", createdAt: '1463607825851', description: "New profile pic!", 
		};
		// Album.findOne({},(err, album) => {
		// 	if(err || !dbAlbum) {
		// 	cb(err || dbAlbum);
		// }
		// })
		cb();
		Image.create(imageObj, function(err, image) {
			console.log('image:', image);
			expect(err).to.not.exist;
			expect(image).to.exist;
			expect(image.description).to.equal(imageObj.description);
			cb();
		});
	});
	})

})

after(function(cb) {
	mongoose.connection.close(cb);
});
