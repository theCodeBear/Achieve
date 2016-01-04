'use strict';

angular.module('achieve')

.directive('acHome', acHome);

function acHome() {
  return {
    restrict: 'E',
    scope: {},
    templateUrl: 'directives/home/home.template.html'
  };
}