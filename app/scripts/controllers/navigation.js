'use strict';

angular.module('portfolioApp')
	.controller('navCtrl', function ($scope, $location) {

		$scope.links = [{
			title: '',
			text: 'Home',
			icon: 'fa-home',
		}, {
			title: 'leadership',
			text: 'Leadership',
			icon: 'fa-users'
		}, {
			title: 'processes',
			text: 'UX Processes',
			icon: 'fa-magic'
		}, {
			title: 'development',
			text: 'Development',
			icon: 'fa-laptop'
		}];

		$scope.navClass = function (page) {
			var currentRoute = $location.path().substring(1) || 'home';
			console.log(currentRoute)
			return page === currentRoute ? 'active' : 'fuckoff';
		};

	console.log($scope.links);

});