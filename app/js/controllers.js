'use strict';

/* Controllers */

var infinityControllers = angular.module('infinityControllers', []);

infinityControllers.controller('mainpageCtrl', ['$scope', 'Upgrades', function($scope, Upgrades) {
	$scope.upgrades = Upgrades.query();
}]);