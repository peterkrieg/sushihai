angular.module('myApp', ['ui.router'])
.config(function($urlRouterProvider, $stateProvider){

	var DefaultState = function(name, controller){
		if(name){
			this.url = '/'+name;
			this.templateUrl = 'partials/'+name+'.html';
		}
		// this.controller =  controller ? controller : 'mainCtrl';
	}

	$stateProvider





	.state('home', {
		url: '/',
		templateUrl: 'partials/home.html',
	})
	.state('about', new DefaultState('about'))

	.state('menu', new DefaultState('menu'))

	.state('gallery', new DefaultState('gallery'))
	.state('contact', new DefaultState('contact'));





	// .state('contact', {
	// 	url: '/contact',
	// 	templateUrl: 'partials/contact.html',
	// })



	;




	$urlRouterProvider.otherwise('/');



















});