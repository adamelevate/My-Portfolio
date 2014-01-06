'use strict';

describe('Controller: DevelopmentCtrl', function () {

  // load the controller's module
  beforeEach(module('portfolioApp'));

  var DevelopmentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DevelopmentCtrl = $controller('DevelopmentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
