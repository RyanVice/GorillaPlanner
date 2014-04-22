'use strict';

angular.module('gorillaPlannerApp')
  .controller('PlannerCtrl', function ($scope, $routeParams, $location) {
    $scope.planName = $routeParams.planTemplateName;
    $scope.cancel = function() {
      $location.path('/');
    };
  });