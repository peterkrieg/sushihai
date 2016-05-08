angular.module('myApp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'partials/home.html',
		controller: 'mainCtrl'
	})

	.state('contact', {
		url: '/contact',
		templateUrl: 'partials/contact.html',
	})




	;




	$urlRouterProvider.otherwise('/');



















});