'use strict';

var app = angular.module('connectApp');


// app.service('ProfileService', function($http) {
	
// 	this.nameSort = (username) => {
// 		return $http.get(`/api/auctions/users/${username}`);
// 	}

	
// })

app.service('CheckInService', function($http) {

	this.getAll = () => {
    	return $http.get('/api/checkIns');
  	};

	this.create = checkIn => {
    	return $http.post('/api/checkIns', checkIn);
  	}
	
	this.update = checkIn => {
    	return $http.put(`/api/checkIns/${checkIn._id}`, checkIn);
  	}

  	this.removecheckIn = (checkIn) => {
  		return $http.delete(`/api/checkIns/${checkIn._id}`)
  	}

  	this.getThisCheckIn = (id) => {
  		return $http.get(`/api/checkIns/${id}`);
  	}

})