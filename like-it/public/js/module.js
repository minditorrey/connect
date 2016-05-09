var app = angular.module('likeItApp', ['ui.router']);



app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/templates/home.html',
			controller: 'homeController'
		})
		.state('register', {
			url: '/register',
			templateUrl: '/templates/authForm.html',
			controller: 'authFormController'
		})
		.state('login', {
      		url: '/login',
      		templateUrl: '/html/authForm.html',
      		controller: 'authFormCtrl'
    	})



	$urlRouterProvider.otherwise('/');

});