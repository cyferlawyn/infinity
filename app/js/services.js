'use strict';

/* Services */

var infinityServices = angular.module('infinityServices', ['ngResource']);

infinityServices.factory('Upgrades', ['$resource',
  function($resource){
    return $resource('json/upgrades.json', {}, {
      query: {method:'GET', params:{}, isArray:true}
    });
  }]);