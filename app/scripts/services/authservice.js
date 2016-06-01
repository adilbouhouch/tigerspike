'use strict';

/**
 * @ngdoc service
 * @name tigerspikeApp.authService
 * @description
 * # authService
 * Service in the tigerspikeApp.
 */
angular.module('tigerspikeApp')
  .service('AuthService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var authService = {};
    
    authService.authenticated = false;
    authService.validUserName = 'tigerspike';
    authService.validPassword = 'tigerspike';
    
    // Just mocking the authentication for now.
    authService.login = function (credentials) {
        if(authService.validUserName == credentials.username 
        && authService.validPassword == credentials.password){
            authService.authenticated = true;
            return "success";
        }
        else{
            authService.authenticated = false;
            return "fail";
        }
    };
    
    authService.isAuthenticated = function () {
        return authService.authenticated;
    };
    
    return authService;
  });
