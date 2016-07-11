var app = angular.module('connectApp', ['ui.router', 'stormpath', 'stormpath.templates', 'pubnub.angular.service']);

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
    	.state('checkIns', {
			url: '/checkIns',
			templateUrl: '/html/checkIns.html',
			controller: 'checkInsController',
			sp: {
				authenticate: true
			}
		})
		.state('situations', {
			url: '/situations',
			templateUrl: '/html/situations.html',
			controller: 'situationsController',
			sp: {
				authenticate: true
			}
		})
		.state('situationDetails', {
			url: '/situationDetails/:id',
			templateUrl: '/html/situationDetails.html',
			controller: 'situationDetailsController',
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
		.state('calendar', {
			url: '/calendar',
			templateUrl: '/html/calendar.html',
			controller: 'calendarController',
			sp: {
				authenticate: true
			}
		})
		.state('memories', {
			url: '/memories',
			templateUrl: '/html/memories.html',
			controller: 'memoriesController',
			sp: {
				authenticate: true
			}
		})
		.state('messages', {
			url: '/messages',
			templateUrl: '/html/messages.html',
			controller: 'messagesController',
			sp: {
				authenticate: true
			}
		})

	$urlRouterProvider.otherwise('/');

});