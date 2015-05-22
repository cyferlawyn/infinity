'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /mainpage when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/mainpage");
  });


  describe('mainpage', function() {

    beforeEach(function() {
      browser.get('index.html#/mainpage');
    });

//    it('should render mainpage when user navigates to /mainpage', function() {
//      expect(element.all(by.css('[ng-view] p')).first().getText()).
//        toMatch(/partial for view 1/);
//    });
  });
  
});
