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
.directive('backImg', function(){
	return function(scope, element, attrs){
		attrs.$observe('backImg', function(value) {
			element.css({
				'background-image': 'url(' + value +')',
			});
		});
	};
});






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
					console.log(offset);
					target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
					if (target.length) {
						console.warn(offset);
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

			// var waitForPics = $interval(function(){
			// 	// console.log(elem.html());
			// 	// if(elem.has().length === scope.instafeedPics.length){
			// 	// 	slickInit();
			// 	// 	$interval.cancel(waitForPics);
			// 	// }
			// }, 2000);

			// setTimeout(function(){
			// 	slickInit();
			// }, 1500);


			// function slickInit(){
			// 	console.log(elem.has().length)
			// 	$(elem).slick({
			// 		centerMode: true,
			// 		centerPadding: '60px',
			// 		slidesToShow: 3,
			// 		autoplay: true,
			// 		autoplaySpeed: 500,
			// 		responsive: [
			// 		{
			// 			breakpoint: 768,
			// 			settings: {
			// 				arrows: true,
			// 				centerMode: true,
			// 				centerPadding: '40px',
			// 				slidesToShow: 3
			// 			}
			// 		},
			// 		{
			// 			breakpoint: 480,
			// 			settings: {
			// 				arrows: true,
			// 				centerMode: true,
			// 				centerPadding: '40px',
			// 				slidesToShow: 1
			// 			}
			// 		}
			// 		]
			// 	});
			// }
			







		}
	};
});


























