angular.module('myApp')
.directive('stickyScroll', function($interval){
	return {
		link: function(scope, elem, attrs){
			var didScroll;
			var $topNavbar = $('#top-navbar');
			var $mainNavbar = $('#main-navbar');
			var $body = $('body');
			var $logo = $mainNavbar.find('img.logo');


			// to minimize load on front end, only change var on every scroll
			$(window).scroll(function(){
				didScroll = true;
			});


			$interval(function(){
				if(didScroll) { 
					checkStickyPosition();
				}
			}, 20);


			function checkStickyPosition(){
				didScroll = false;
				var scrollDistance = $(document).scrollTop();
				// console.log(scrollDistance);
				var topNavbarHeight = $topNavbar.outerHeight();

				// add class when navbar needs to be in sticky position, 
				$body.toggleClass('sticky-navbar', scrollDistance > topNavbarHeight);

				// even though not named in function, also will check if navbar should animate or not
				if(scrollDistance > 100) toggleNavbarState(true);
				else toggleNavbarState(false);

				function toggleNavbarState(state){
					// state of true means switch it to white background
					// false is opposte
					if(state && $mainNavbar.hasClass('transparent')){
						$mainNavbar.removeClass('transparent');
						$logo.attr('src', 'img/logo-black.png');
					}
					else if(!state && !$mainNavbar.hasClass('transparent')){
						$mainNavbar.addClass('transparent');
						$logo.attr('src', 'img/logo-white.png');
					}
				}
			}




		}
	};
});