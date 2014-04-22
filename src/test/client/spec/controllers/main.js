'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('gorillaPlannerApp'));

  var MainCtrl,
    scope,
    $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_, $controller, $rootScope) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/planTemplates')
      .respond(['one', 'two', 'three']);
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of planTemplates to the scope', function () {
    expect(scope.planTemplates).toBeUndefined();
    $httpBackend.flush();
    expect(scope.planTemplates.length).toBe(3);
  });
});
