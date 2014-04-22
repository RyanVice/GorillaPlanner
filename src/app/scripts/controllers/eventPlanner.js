'use strict';

angular.module('gorillaPlannerApp')
  .controller('EventPlannerCtrl', function ($scope, $routeParams, $location, $modal) {
    $scope.tasks = [{
        summary: 'Arrive at Tricia\'s',
        details: 'We will need to meet at Tricia\'s and have Tricia let us in.',
        assignedTo: ['tricia@gmail.com'],
        date: '2/1/2014',
        time: '6:00 PM'
      }, {
        summary: 'Have dinner with the Richards',
        details: 'We will meet the Richards at their house for dinner',
        assignedTo: ['brooke@gmail.com'],
        date: '2/1/2014',
        time: '7:00 PM'
      },{
        summary: 'Meet Heather at the doctor\'s',
        details: 'We need Susie to meet Heather at the doctor\'s and pick up the kids',
        assignedTo: ['susan@gmail.com', 'me', 'ryanvicetx@gmail.com'],
        date: '2/2/2014',
        time: '9:00 AM'
      }, {
        summary: 'Take kids to lifetime',
        details: 'We will need to meet at Tricia\'s and have Tricia let us in.',
        assignedTo: ['tricia@gmail.com'],
        date: '2/1/2014',
        time: '9:00 AM'
      }
    ];

    $scope.removeTask = function(task) {
      $scope.tasks.splice($scope.tasks.indexOf(task), 1);
    };

    $scope.cancel = function() {
      $location.path('/');
    };

    $scope.addEditTask = function () {

      var modalInstance = $modal.open({
        templateUrl: 'partials/event-planner-modal',
        controller: 'EventPlannerModalCtrl',
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (task) {
        $scope.tasks.push(task);
      });
    };
  });