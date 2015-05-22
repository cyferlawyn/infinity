'use strict';

describe('infinityControllers', function() {

  beforeEach(module('infinityApp'));
  beforeEach(module('infinityControllers'));

  describe('mainpageCtrl', function(){
    var scope, controller

    beforeEach(inject(function($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller('mainpageCtrl', {$scope: scope});
    }));


    it('should have injected members now', function() {
        //spec body
    	expect(scope).toBeDefined();
    	expect(controller).toBeDefined();
      });
  });
});