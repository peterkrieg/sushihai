angular.module('myApp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'partials/home.html',
		controller: 'mainCtrl'
	})


	.state('about', {
		url: '/about', 
		templateUrl: 'partials/about.html'
	})

	.state('menu', {
		url: '/menu', 
		templateUrl: 'partials/menu.html'
	})

	.state('gallery', {
		url: '/gallery', 
		templateUrl: 'partials/gallery.html'
	})


	.state('contact', {
		url: '/contact',
		templateUrl: 'partials/contact.html',
	})



	;




	$urlRouterProvider.otherwise('/');



















});