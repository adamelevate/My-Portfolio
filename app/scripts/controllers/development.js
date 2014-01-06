'use strict';

angular.module('portfolioApp')
  .controller('DevelopmentCtrl', function ($scope) {

	$scope.technology= [
		{name:'Node.js',
			url:'http://nodejs.org/',
			description:'I\'m a big fan of node.js, merely for rapid prototyping and development environment I do alot.',
			logo:'node-logo.png'},
		{name:'Angular.js',
			url:'http://angularjs.org/',
			description:'My exposure to angular blew my mind. Simple, powerful and something I could actually do.',
			logo:'AngularJS-large.png'},
		{name:'Yeoman',
			url:'http://yeoman.io/',
			description:'An awesome way to setup projects based on templates, pretty fast to setup, deploy and use.',
			logo:'yeoman-logo.png'},
		{name:'Grunt',
			url:'http://gruntjs.com/',
			description:'My workhorse; compiles, lints, copies, minifies, and really just a powerful development tool.',
			logo:'grunt-logo.png'},
		{name:'Bower',
			url:'http://bower.io/',
			description:'Manages the myriad of packages I install and use. Without this I\'d be a lost code lamb.',
			logo:'bower-logo.png'},
		{name:'Less',
			url:'http://lesscss.org/',
			description:'They Less is more, and it\'s true. I can\'t go back to writing css the old way ever again.',
			logo:'less.png'}
	];


});
