'use strict';

/* App Module */

var infinityApp = angular.module('infinityApp', [
  'ngRoute',
  'infinityControllers',
  'infinityServices'
]);

infinityApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/mainpage', {
        templateUrl: 'partials/mainpage.html',
        controller: 'mainpageCtrl'
      }).
      otherwise({
        redirectTo: '/mainpage'
      });
  }]);