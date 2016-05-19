'use strict';

var expect = require('chai').expect;
var Album = require('../../models/album');



const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/photoApp';

before(function(cb) {
  mongoose.connection.close(function() {
    mongoose.connect(dbUrl, cb);
  });
});

beforeEach(function(cb) {
  console.log('BEFOREEACH')

  Album.remove({}, err => {
    Album.create({
      name: 'my album', _images: ["https://pixabay.com/static/uploads/photo/2016/01/14/01/41/image-view-1139204_960_720.jpg', description: 'Nice pic of grass."]
    }, err => {
      cb();

    });

  });
});

describe('Album', function() {
  describe('.create()', function() {

    it('should create a new album in the db.', function(cb) {
      var albumObj = {name: "my album", createdAt: '1463607825851', _images: ["https://pixabay.com/static/uploads/photo/2016/01/14/01/41/image-view-1139204_960_720.jpg', description: 'Nice pic of grass."]
      };

      Album.create(albumObj, function(err, image) {
        console.log('album:', album);
        expect(err).to.not.exist;
        expect(image).to.exist;
        expect(image.description).to.equal(albumObj.desccription);
        cb();
      });
      
    });
  })

})

after(function(cb) {
  mongoose.connection.close(cb);
});
