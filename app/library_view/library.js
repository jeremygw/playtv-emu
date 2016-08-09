'use strict';

angular.module('myApp.library', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/library', {
    templateUrl: 'library_view/library.html',
    controller: 'LibraryCtrl'
  });
}])

.controller('LibraryCtrl', ['$scope', function($scope) {
        
}]);