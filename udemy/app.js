// MODULE
var angularApp = angular.module('angularApp', []);

// CONTROLLERS
angularApp.controller('mainController', ['$scope','$timeout', function ($scope, $timeout) {

  $scope.name = 'Tony';

  $timeout(function() {
    $scope.name = 'Everybody'
  }, 3000);
  
}]);