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
			console.log($scope.instafeedPics);
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
		console.log('\n\n\n', response.data.data, '\n\n');
		var photos = response.data.data;
		// var numPhotos = photos.length;

		var photoUrls = [];



		photos.forEach(function(photo, index){
			var photoUrl = 'https://graph.facebook.com/v2.6/'+photo.id+'?key=value&access_token='+appId+'|'+appSecret+'&fields=images';
			$http.get(photoUrl)
			.then(function(response){
				console.log(response.data, index);
				photoUrls[index] = response.data.images[0].source;
				// if every photoUrl is defined, 
				if(photoUrls.length === photos.length && photoUrls.every(function(url){return url})){
					console.log('photo URLS are: \n', photoUrls);
				}
			});



		});


		// retrievePhoto(0);
		// function retrievePhoto(index){
		// 	var photoId = photos[index].id;
		// 	var photoUrl = 'https://graph.facebook.com/v2.6/'+photoId+'?key=value&access_token='+appId+'|'+appSecret+'&fields=images';
		// 	$http.get(photoUrl)
		// 	.then(function(response){
		// 		var photoSource = response.data.images[0].source;
		// 		photoArr.push(photoSource);
		// 		console.log(photoArr);
		// 		index++;
		// 		if(index === numPhotos) return;
		// 		else retrievePhoto(index);
		// 	});
		// }
		// console.log(photoArr);



		// $http.get('https://graph.facebook.com/v2.6/'+id+'?key=value&access_token='+appId+'|'+appSecret+'&fields=event,from,height,images')
		// .then(function(response){
		// 	console.log('photo is: ', response.data);
		// })
	});

	// fbAsyncInit();
// 	// FB.api(
//  //    "/1418852011464345",
//  //    function (response) {
//  //    	console.log('repsonse from fb api is: \n', response);
//  //      // if (response && !response.error) {
//  //      // 	co
//  //      //   /* handle the result */
//  //      // }
//  //    }
// );




	






	// var url = "https://api.instagram.com/v1/tags/batescollege/media/recent?access_token=1359984932.d8d1d50.66ef28ddde2f498094c8e3804f87c627&count=20&callback=instafeedCacheac0a34fb0e9aaffc.parse"

	// $http({
	// 	url: url,
	// 	method: 'JSONP'
	// }).then(function(response){
	// 	console.log(response);
	// });








// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
		$('.navbar-toggle:visible').click();
	});



	// $http({
	// 	method: 'JSONP',
	// 	url: url})
	// .then(function(response){
	// 	console.log(response);
	// })

	// $http.jsonp(url)
	// .success(function(data){
	// 	console.log(data);
	// })

	// $http({
 //        method: 'JSONP',
 //        url: url,
 //        params: {
 //            format: 'jsonp',
 //            json_callback: 'JSON_CALLBACK'
 //        }
 //    })

	// .then(function(response){
	// 	console.log(response);
	// })

// 	$.get( url, function( data ) {
//   // $( ".result" ).html( data );
//   console.log(data);
//   // alert( "Load was performed." );
// });


// 	$.getJSON( url, function( data ) {
//   console.log(data);
// });


// $.ajax({
// 	headers: { "Accept": "application/json"},
// 	type: 'GET',
// 	url: url,
// 	crossDomain: true,
// 	beforeSend: function(xhr){
// 		xhr.withCredentials = true;
// 	},
// 	success: function(data, textStatus, request){
// 		console.log(data);
// 	}
// });





});