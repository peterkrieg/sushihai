angular.module('myApp')
.controller('mainCtrl', function($scope, $http, $interval){

	// show fewer photos for mobile
	var numPhotos = $(window).width() > 700 ? 20 : 10;

	var feed = new Instafeed({ 
		get: 'user',
		userId: '274968323', 
		accessToken: '1359984932.d8d1d50.66ef28ddde2f498094c8e3804f87c627', 
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