angular.module('myApp')
.directive('slickImage', function($interval){
	return {
		link: function(scope, elem, attrs){
			pageInit();

			function pageInit(){
				slickInit();
				sizeImageSlider();
			}


			function slickInit(){
				var $images = $('ul.images');
				// console.log($images);

				$images.slick({

					swipeToSlide: true,
					arrows: false,
					autoplay: true,
					speed: 700,
					autoplaySpeed: 6000

				});
				sizeImageSlider();
			}


			// override image slider, to make it fill screen

			function sizeImageSlider(){
				var $images = $('ul.images');
				if($images){
					var windowHeight = $(window).height();
					var navbarsHeight = $('#top-navbar').height();
					var imageSliderHeight = windowHeight - navbarsHeight;
					$images.css('height', imageSliderHeight);
				}
			}
			// sizeImageSlider();

			$(window).resize(sizeImageSlider);





		}


	}







})