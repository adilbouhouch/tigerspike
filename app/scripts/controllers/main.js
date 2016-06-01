'use strict';

/**
 * @ngdoc function
 * @name tigerspikeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tigerspikeApp
 */
angular.module('tigerspikeApp')
  .controller('MainCtrl', function ($scope, AuthService, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    if (!AuthService.isAuthenticated()) {
        $location.path( "/login" );
    }
  });
