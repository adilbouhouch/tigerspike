'use strict';

/**
 * @ngdoc function
 * @name tigerspikeApp.controller:RegisterCtrl
 * @description
 * # RegisterCtrl
 * Controller of the tigerspikeApp
 */
angular.module('tigerspikeApp')
  .controller('RegisterCtrl', function ($scope, $location) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    
    $scope.registration = {
        forname: '',
        surname: '',
        sex: '',
        birthdate: '',
        email: '',
        emailConfirm: '',
        password: ''
    };
    
    $scope.passwordType = 'password';
    
    $scope.togglePassword = function(){
        if($scope.passwordType == 'password'){
            $scope.passwordType = 'text';
        }
        else{
            $scope.passwordType = 'password';
        }
    };
    
    // validate if emails are matching
    $scope.matchingEmails = function(){
        var matching = $scope.registration.email == $scope.registration.emailConfirm;
        if(!matching){
            $scope.registrationForm.txtEmailConfirm.$setValidity("registrationForm.txtEmailConfirm.$error.match", false);
        }
        else{
            $scope.registrationForm.txtEmailConfirm.$setValidity("registrationForm.txtEmailConfirm.$error.match", true);
        }
        
        return matching
    }
    
    $scope.goToFirstError = function(){
        var invalidItems = $(".ng-invalid");
        
        if (invalidItems.length > 0) {
            invalidItems[1].focus();
        }
    }
    
    $scope.register = function (registration) {
        // registration logic
        if ($scope.registrationForm.$valid) {
            alert("registration succesfull");
            $location.path('/login');
        }
    };
  });
