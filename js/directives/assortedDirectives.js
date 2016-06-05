angular.module('myApp')
.directive('aboutSection', function(){
	return {
		templateUrl: 'partials/about.html'
	};
});

angular.module('myApp')
.directive('menuSection', function(){
	return {
		templateUrl: 'partials/menu.html'
	};
});