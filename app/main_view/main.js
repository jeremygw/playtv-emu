'use strict';

angular.module('myApp.main', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/main', {
    templateUrl: 'main_view/main.html',
    controller: 'MainCtrl'
  });
}])

.controller('MainCtrl', ['$scope', function($scope) {
        
}]);