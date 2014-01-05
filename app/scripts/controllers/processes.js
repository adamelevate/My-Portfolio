'use strict';

angular.module('portfolioApp')
	.controller('ProcessesCtrl', function ($scope) {

		$scope.chosen = '';
		$scope.imageUrl = '';

		$scope.chooseProcess = function (input) {
			$scope.chosen = input;
		};

		$scope.viewFullscreen = function(url){
			$location.path(url);
		};

		$scope.processes = [{
			title: 'Personas',
			description: 'Understanding your specific customer\'s needs comes first, this establishes their motivation and challenges.',
			icon: 'fa-user',
			story: 'views/processes/personas.html'
		}, {
			title: 'Paths',
			description: 'Streamlining the organization of your information lets customers easily find what they\'re looking for.',
			icon: 'fa-sitemap',
			story: 'views/processes/paths.html'
		}, {
			title: 'Behaviors',
			description: 'Planning for what customers can and might do encourages them to keep using your product knowing you\'re totally helping them.',
			icon: 'fa-code-fork',
			story: 'views/processes/behaviors.html'
		}, {
			title: 'Journeys',
			description: 'Looking at the entire customer journey lets you identify bad interactions and plan to improve them.',
			icon: 'fa-globe',
			story: 'views/processes/journeys.html'
		}];

	}).directive('lazyLoad', function(){
		return function(scope, element, attrs){
			console.log(scope);
			console.log(element);
			console.log(attrs.srcMobile);
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				element.attr('src', attrs.srcMobile);
			}
			else{
				element.attr('src', attrs.srcDesktop);
			}
				element.addClass('lazy-loaded');
		};
	});