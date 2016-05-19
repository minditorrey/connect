'use strict';

const supertest = require('supertest');

let app = require('../../app');

var Image = require('../../models/image');

var expect = require('chai').expect;


const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/photoApp';

before(function(cb) {
	mongoose.connection.close(function() {
		mongoose.connect(dbUrl, cb);
	});
});

beforeEach(function(cb) {
  	Image.remove({}, err => {

		Image.create({
			url: 'https://pixabay.com/static/uploads/photo/2016/01/14/01/41/image-view-1139204_960_720.jpg', description: 'Nice pic of grass.'
		}, (err, image) => {
			cb();
		});
		cb();
	});
})


describe('/api/images', function() {

	describe('GET /', () => {

		it('should respond with the array of images', cb => {

			supertest(app)
				.get('/api/images')
				.end((err, res) => {
					expect(err).to.not.exist;
					expect(res.statusCode).to.equal(200);
					expect(res.body).to.be.an('array');
					expect(res.body).to.have.length(1);
					console.log('err:', err);
					console.log('res:', res);
					cb();
				});
		});
	});
});

after(function(cb) {
  mongoose.connection.close(cb);
});

