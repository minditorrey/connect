var app = angular.module('meanStormpath', ['ui.router', 'stormpath', 'stormpath.templates']);

app.run(function($stormpath){
  $stormpath.uiRouter({
    loginState: 'login',
    defaultPostLoginState: 'home'
  });
});

app.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/html/home.html',
			controller: 'homeController'
		})
    	.state('login', { 
    		url: '/login', 
    		templateUrl: '/html/login.html' 
    	})
    	.state('register', { 
    		url: '/register', 
    		templateUrl: '/html/register.html' 
    	})
    	.state('items', {
			url: '/auctions',
			templateUrl: '/html/items.html',
			controller: 'itemsController',
			sp: {
				authenticate: true
			}
		})
		.state('profiles', {
			url: '/profiles',
			templateUrl: '/html/profiles.html',
			controller: 'profilesController',
			sp: {
				authenticate: true
			}
		})		
		.state('details', {
			url: '/details/:id',
			templateUrl: '/html/details.html',
			controller: 'detailsController',
			sp: {
				authenticate: true
			}
		})

	$urlRouterProvider.otherwise('/');

});