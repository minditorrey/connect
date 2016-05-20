var app = angular.module('photoApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: '/templates/home.html',
			controller: 'homeController'
		})		
		.state('images', {
			url: '/images',
			templateUrl: '/templates/images.html',
			controller: 'imagesController'
		})
		.state('albums', {
			url: '/albums',
			templateUrl: '/templates/albums.html',
			controller: 'albumsController'
		})
		.state('details', {
			url: '/details/:id',
			templateUrl: '/templates/details.html',
			controller: 'detailsController'
		})


	$urlRouterProvider.otherwise('/');

});