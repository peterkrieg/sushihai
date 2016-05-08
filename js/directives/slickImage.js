angular.module('myApp')
.directive('slickImage', function(){
	return {
		link: function(scope, elem, attrs){

			var $images = $('ul.images');

			$images.slick({

				arrows: false,
				autoplay: true,
				autoplaySpeed: 3000

			});

			$images.find('div.image').each(function(){
				var imageNumber = $(this).attr('data-image-number');

				$(this).css('background-image', 'url(\'img/'+imageNumber+'.jpg\')');
				// $(this).css('background-image', "url('img/img1.jpg')");
			})





		}


	}







})