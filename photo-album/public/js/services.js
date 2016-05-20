'use strict';

var app = angular.module('photoApp');

app.service('AlbumService', function($http) {

  	this.getAll = () => {
  		return $http.get('/api/albums');
  	}

  	this.create = album => {
  		return $http.post('/api/albums', album);
    }

    this.update = album => {
    	return $http.put(`/api/albums/${album._id}`, album);
  	}

    this.removeAlbum = (album) => {
  		return $http.delete(`/api/albums/${album._id}`);
  	}

  	this.getThisAlbum = (id) => {
  		return $http.get(`/api/albums/${id}`);
  	}
})


app.service('ImageService', function($http) {

	this.getAll = () => {
  		return $http.get('/api/images');
  	}

  	this.create = image => {
  		return $http.post('/api/images', image);
    }

    this.removeImage = (image) => {
  		return $http.delete(`/api/images/${image._id}`)
  	}

})

