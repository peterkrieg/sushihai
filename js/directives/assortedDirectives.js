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

angular.module('myApp')
.directive('gallerySection', function(){
	return {
		templateUrl: 'partials/gallery.html'
	};
});





angular.module('myApp')
.directive('assortedDirectives', function(){
	return {
		link: function(scope, elem, attrs){
			// initiates bootstrap scrollspy
			$('body').scrollspy({ target: '#main-navbar', offset: 70});

			// stuff I got from css tricks..
			$('a[href*="#"]:not([href="#"])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: target.offset().top -70
						}, 1000);
						return false;
					}
				}
			});




		}
	};
});