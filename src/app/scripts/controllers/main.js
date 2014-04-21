'use strict';

angular.module('gorillaPlannerApp')
  .controller('MainCtrl', function ($scope, $http, $window, $location) {
    $http.get('/api/planTemplates').success(function (planTemplates) {
      $scope.planTemplates = planTemplates;
    });

    $scope.startPlanning = function() {
      var url = '/' + $scope.plan.name + '-planner/';
      $location.path(url);
    };
  });
