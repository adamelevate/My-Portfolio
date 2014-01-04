'use strict';

angular.module('portfolioApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/projects', {
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/processes', {
        templateUrl: 'views/processes.html',
        controller: 'ProcessesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
