'use strict';

var expect = require('chai').expect;

var Image = require('../../models/image');
var db = require('../../config/db');

const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/photoApp';

beforeEach(function(cb) {
  db.run('DELETE FROM images', function(err) {
    if(err) return cb(err);
    db.run(`INSERT INTO images (url, createdAt, description)
            VALUES ("http://i.imgur.com/YOnKbIy.jpg", "1463607825851", "New profile pic!")`, cb);
  });
});

describe('Image', function() {
  describe('.create()', function() {

    it('should create a new image in the db.', function(cb) {
      var todoObj = {url: "http://i.imgur.com/YOnKbIy.jpg", createdAt: '1463607825851',  description: "New profile pic!"
      };

      Image.create(imageObj, function(err, image) {
        console.log('image:', image);
        expect(err).to.not.exist;
        expect(image).to.exist;
        expect(image.description).to.equal(imageObj.desccription);
        cb();
      });
    });

