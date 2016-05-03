var app = angular.module('triviaApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('categories', {
			url: '/categories',
			templateUrl: '/templates/categories.html',
			controller: 'categoriesController'
		})
		.state('dragDetails', {
			url: '/dragDetails',
			templateUrl: '/templates/dragDetails.html',
			controller: 'dragDetailsController'
		})
		.state('bobDetails', {
			url: '/bobDetails',
			templateUrl: '/templates/bobDetails.html',
			controller: 'bobDetailsController'
		})
		.state('deadDetails', {
			url: '/deadDetails',
			templateUrl: '/templates/deadDetails.html',
			controller: 'deadDetailsController'
		})
		.state('cards', {
			url: '/cards/:category',
			templateUrl: '/templates/cards.html',
			controller: 'cardsController',
		})


	$urlRouterProvider.otherwise('/');

});