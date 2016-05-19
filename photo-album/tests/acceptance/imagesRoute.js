'use strict';

const supertest = require('supertest');

let app = require('../../app');

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
  	Album.remove({}, err => {

		Image.create({
			url: 'https://pixabay.com/static/uploads/photo/2016/01/14/01/41/image-view-1139204_960_720.jpg', description: 'Nice pic of grass.'
		}, (err, image) => {
			cb();
		});
	});
})


describe('/api/images', function() {

	describe('GET /', () => {

		it('should respond with the array of images', cb => {

			supertest(app)
				.get('/api/images')
				.end((err, res) => {
					conole.log('err:', err);
					conole.log('res:', res);
					cb();
				});
		});
	});
});


