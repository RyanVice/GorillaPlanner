'use strict';

angular.module('gorillaPlannerApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('/api/awesomeThings').success(function (awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });

    $http.get('/api/planTemplates').success(function (planTemplates) {
      $scope.planTemplates = planTemplates;
    });
  });
