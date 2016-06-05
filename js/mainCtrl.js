angular.module('myApp')
.controller('mainCtrl', function($scope, $http){

	console.log('hello');


	var url = 'https://www.instagram.com/sushi_hai/media/?callback=JSON_CALLBACK';
	// var url = "http://swapi.co/api/people/1/";

	// $http.get(url).then(function(response){
	// 	console.log(response)
	// })

	// $http.jsonp(url).then(function(response){
	// 	console.log(response);
	// })



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