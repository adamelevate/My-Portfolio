'use strict';

angular.module('portfolioApp')
	.controller('ProcessesCtrl', function ($scope, $window) {

		$scope.chosen = '';

		$scope.chooseProcess = function (input) {
			$scope.chosen = input;
		};

		$scope.viewFullscreen = function(e){
			$window.open(e.currentTarget.attributes[2].nodeValue, '_blank');

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
			description: 'Planning for what customers can do will keep them using your product.',
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
			var returnImage = '';
			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
				returnImage = attrs.srcMobile;
			}
			else{
				returnImage = attrs.srcDesktop;
			}
			element.parent().attr('data-src', returnImage)
			element.attr('src', returnImage).addClass('lazy-loaded');
		};
	});