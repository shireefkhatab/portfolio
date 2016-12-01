'use strict';

/**
 * @ngdoc function
 * @name public.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the public
 */
angular.module('public')


.controller('AboutController', function () {
 var aboutCtrl = this;
  aboutCtrl.oneAtATime = true;

  aboutCtrl.status = {
    isCustomHeaderOpen: true,
    isFirstOpen: false,
    isFirstDisabled: true
  };
});