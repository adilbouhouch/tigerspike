'use strict';

/**
 * @ngdoc function
 * @name tigerspikeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the tigerspikeApp
 */
angular.module('tigerspikeApp')
  .controller('LoginCtrl', function ($scope, $rootScope, AuthService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.credentials = {
        username: '',
        password: ''
    };
    
    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function (user) {
            $rootScope.$broadcast('success');
            $scope.setCurrentUser(user);
        }, function () {
            $rootScope.$broadcast('failed');
        });
    };
  });
