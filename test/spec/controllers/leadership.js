'use strict';

describe('Controller: LeadershipCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var LeadershipCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LeadershipCtrl = $controller('LeadershipCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
