angular.module('myApp')
.directive('slickImage', function(){
	return {
		link: function(scope, elem, attrs){

			var $images = $('ul.images');

			$images.slick({

				swipeToSlide: true,
				arrows: false,
				autoplay: true,
				speed: 700,
				autoplaySpeed: 6000

			});

			$images.find('div.image').each(function(){
				var imageNumber = $(this).attr('data-image-number');

				$(this).css('background-image', 'url(\'img/'+imageNumber+'.jpg\')');
			});

			// override image slider, to make it fill screen

			function sizeImageSlider(){
				var windowHeight = $(window).height();
				var navbarsHeight = $('#top-navbar').height();
				var imageSliderHeight = windowHeight - navbarsHeight;
				$images.css('height', imageSliderHeight);
			}
			sizeImageSlider();

			$(window).resize(sizeImageSlider);





		}


	}







})