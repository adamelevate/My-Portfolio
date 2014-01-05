'use strict';

angular.module('portfolioApp')
	.controller('ProcessesCtrl', function ($scope) {

		$scope.chosen = '';

		$scope.chooseProcess = function (input) {
			$scope.chosen = input;
		};

		$scope.processes = [{
			title: 'Personas',
			description: 'Understanding your specific customer\'s needs comes first, this establishes their motivation and challenges.',
			icon: 'fa-user'
		}, {
			title: 'Journeys',
			description: 'Looking at the entire customer journey lets you identify bad interactions and plan to improve them.',
			icon: 'fa-globe'
		}, {
			title: 'Paths',
			description: 'Streamlining the organization of your information architecture lets customers easily find what they\'re looking for.',
			icon: 'fa-sitemap'
		}, {
			title: 'Behaviors',
			description: 'Planning for what customers can and might do encourages them to keep using your product knowing you\'re totally helping them.',
			icon: 'fa-code-fork'
		}];

	});