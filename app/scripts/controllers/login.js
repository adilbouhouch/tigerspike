'use strict';

/**
 * @ngdoc function
 * @name tigerspikeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the tigerspikeApp
 */
angular.module('tigerspikeApp')
  .controller('LoginCtrl', function ($scope, $rootScope, AuthService, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.credentials = {
        username: '',
        password: ''
    };
    
    $scope.errorMessage = '';
    
    $scope.login = function (credentials) {
        if ($scope.loginForm.$valid) {
            var result = AuthService.login(credentials)
            if(result == "success") {
                $scope.errorMessage = '';
                $location.path( "/main" );
            }else {
                $scope.errorMessage = 'invalid username and password combination.';
            }            
        }

    };
  });
