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

app.service('SituationsService', function($http) {
  this.getAll = () => {
    return $http.get('/api/situations');
  };

  this.create = situation => {
    return $http.post('/api/situations', situation);
  }

  this.update = situation => {
    return $http.put(`/api/situation/${situation._id}`, situation);
  }

  this.removeSituation = (situation) => {
    return $http.delete(`/api/situations/${situation._id}`)
  }
  this.getThisSituation = (id) => {
    return $http.get(`/api/situations/${id}`);
  }
})