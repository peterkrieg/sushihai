angular.module('myApp')
.directive('tabBehavior', function($state){
	return {
		link: function(scope, elem, attrs){
			console.log('testing 123')


			var tabNames = ["about", "menu", "gallery", "contact"];
			var $tabElements = $(elem).find('li');
			scope.$on('$stateChangeSuccess', function(){
				var currentState = $state.current.name;

				if(tabNames.indexOf(currentState)> -1){
					$tabElements.removeClass('active');
					
					// var test = $tabElements.filter('[data-state="'+currentState+'"]').addClass('active');
					var $activeTab = $tabElements.find('[data-state="'+currentState+'"]').parent();
					// var $activeTab = $('[data-state="'+currentState+'"]').parent();
					console.log($activeTab);
					$activeTab.addClass('active');

					// var test = $('[data-state="'+currentState+'"]');


					// console.log(test);
					// $tabElements.addClass('active');
				}





			});



		}
	}
})