'use strict';

var app = angular.module('facePageApp');

app.service('Auth', function($http, $q) {

  this.register = userObj => {
    return $http.post('/api/users/register', userObj);
  };

  this.login = userObj => {
    return $http.post('/api/users/login', userObj)
      .then(res => {
        return this.getProfile();
      });
  };

  this.logout = () => {
    return $http.delete('/api/users/logout')
      .then(res => {
        this.currentUser = null;
        return $q.resolve();
      });
  };

  this.getProfile = () => {
    return $http.get('/api/users/profiles')
      .then(res => {
        this.currentUser = res.data;
        return $q.resolve(res.data);
      })
      .catch(res => {
        this.currentUser = null;
        return $q.reject(res.data);
      });
  };

});

app.service('ProfileSvc', function($http) {
  
  this.create = profile => {
    return $http.post('/api/profiles', profile);
  }

  this.update = user => {
    return $http.put(`/api/users/${user._id}`, user);
  }
});



// app.service('PostSvc', function($http) {
// 	this.create = post => {
// 		return $http.post('/api/posts', post);
// 	}
// 	this.getAll = () => {
// 		return $http.get('api/posts');
// 	}

// 	this.removePost = (post) => {
//   	return $http.delete(`/api/posts/${post._id}`)
//   }

// });