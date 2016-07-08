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
.directive('contactSection', function(){
	return {
		templateUrl: 'partials/contact.html'
	};
});

angular.module('myApp')
.directive('assignPictures', function(){
	return function(scope, elem, attrs){
		var $images = $(elem).find('div');
		$images.each(function(index, $img){
			// make sure it's a jquery object, not raw HTML
			$img = $($img);
			// class of each image corresponds to name of file on server
			var imageSrc = $img.attr('class')+'.jpg';
			console.log(imageSrc);
			$img.css('background-image', 'url(img/'+imageSrc+')');
		})
	};
});

// used for slideshow pictures, when they were hooked up to facebook
// angular.module('myApp')
// .directive('backImg', function(){
// 	return function(scope, element, attrs){
// 		attrs.$observe('backImg', function(value) {
// 			element.css({
// 				'background-image': 'url(' + value +')',
// 			});
// 		});
// 	};
// });








angular.module('myApp')
.directive('assortedDirectives', function($interval){
	return {
		link: function(scope, elem, attrs){
			var checkIfImagesLoaded = $interval(function(){
				console.log('interval run')
				if(scope.photoUrls){
					$('body').hide();
					$('body').css('opacity', '1');
					$('body').fadeIn(400);
					$interval.cancel(checkIfImagesLoaded);
				}
			}, 500)





			// initiates bootstrap scrollspy
			$('body').scrollspy({ target: '#main-navbar', offset: 80});












			// stuff I got from css tricks..
			$('a[href*="#"]:not([href="#"])').click(function() {
				// $('#main-navbar ul.navbar-nav li').removeClass('active');
				// $(this).parent().addClass('active');
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
					var target = $(this.hash);
					var offset = +$(this).attr('offset') || 70;
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: target.offset().top - offset
						}, 1000);
						return false;
					}
				}
			});
		}
	};
});


angular.module('myApp')
.directive('slickInstagram', function($interval){
	return {
		link: function(scope, elem, attrs){
			// doesn't get loaded until instafeedPics attached to scope
			console.log(elem);
			console.warn(scope.instafeedPics);
			console.log( elem.children().length);


		}
	};
});


























