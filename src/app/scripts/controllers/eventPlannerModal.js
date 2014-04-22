'use strict';

angular.module('gorillaPlannerApp')
  .controller('EventPlannerModalCtrl', function ($scope, $modalInstance) {
    $scope.task = {
    };

    $scope.ok = function () {
      $modalInstance.close($scope.task);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  });