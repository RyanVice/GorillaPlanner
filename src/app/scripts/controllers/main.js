'use strict';

angular.module('gorillaPlannerApp')
  .controller('MainCtrl', function ($scope, $http, $window, $location) {
    $http.get('/api/awesomeThings').success(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $http.get('/api/planTemplates').success(function (planTemplates) {
      $scope.planTemplates = planTemplates;
    });

    $scope.startPlanning = function() {
      $location.path('/planner/' + $scope.plan.name);
    };
  });
