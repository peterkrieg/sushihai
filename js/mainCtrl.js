angular.module('myApp')
.controller('mainCtrl', function($scope, $http, $interval){

	// show fewer photos for mobile
	var numPhotos = $(window).width() > 700 ? 20 : 10;

	// var accessToken = '1359984932.1677ed0.ccbd5a5b0b1845c1bae2dbb7f4190468'; // this is for my account
	var accessToken = '274968323.1677ed0.f4fe68615f5d446096e57207c2b534ed';

	// var userId = '1359984932' // this is my (peter krieg ) ID
	var userId = '274968323';  // sushi hai user ID

	var feed = new Instafeed({ 
		get: 'user',
		userId: userId,  // this is sushi hai ID
		accessToken: accessToken, 
		sortBy: 'most-recent', limit: numPhotos });

		feed.run(); 


	// var instafeedPics;
	var checkPics = $interval(function(){
		if(window.instafeedPics !== undefined){
			$scope.instafeedPics = instafeedPics;
			// console.log($scope.instafeedPics);
			$interval.cancel(checkPics);
		}

	}, 60);


	// var fbUrl = 'https://graph.facebook.com/v2.6/1418852011464345';
	var appId = '1126172814110828';
	var appSecret = '80434e599e63e7cc2913d1f92e599a95';
	var albumId = '1420476681301878'
	var fbUrl = 'https://graph.facebook.com/v2.6/'+albumId+'/photos?key=value&fields=link&access_token='+appId+'|'+appSecret+'';
	$http.get(fbUrl)
	.then(function(response){
		// returns photos with just IDs, 
		// need to then HTTP get each photo by ID, to get URL
		var photos = response.data.data;

		var photoUrls = [];

		photos.forEach(function(photo, index){
			var photoUrl = 'https://graph.facebook.com/v2.6/'+photo.id+'?key=value&access_token='+appId+'|'+appSecret+'&fields=images';
			$http.get(photoUrl)
			.then(function(response){
				// console.log(response.data, index);
				photoUrls[index] = response.data.images[0].source;
				// if every photoUrl is defined, 
				if(photoUrls.length === photos.length && photoUrls.every(function(url){return url})){
					// console.log('photo URLS are: \n', photoUrls);
					$scope.photoUrls = photoUrls;
				}
			});
		});
	});







// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});


});