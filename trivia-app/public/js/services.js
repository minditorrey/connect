'use strict';

var app = angular.module('triviaApp');

app.service('Card', function($http) {

  this.getAll = () => {
    return $http.get('/api/cards');
  }

  this.getByCategory = (category) => {
    return $http.get(`/api/cards/${category}`).
    then(function(cards){
    	return cards;
    }, function(err){
    	console.error(err);
    })
  }
});