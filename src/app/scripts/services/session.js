'use strict';

angular.module('gorillaPlannerApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
