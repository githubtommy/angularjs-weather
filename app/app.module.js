'use strict';

// Define the `angularWeatherApp` module
var angularWeatherApp = angular.module('angularWeatherApp', [
  'ngResource',
  'ngAnimate',
  'ngRoute',
  'angularMoment',
  'LocalStorageModule',
  'core',
  'weather',
  'about'
])

.directive('ngEnter', function() {
  return function(scope, element, attrs) {
    element.bind("keydown keypress", function(event) {
      if (event.which === 13) {
        scope.$apply(function() {
          scope.$eval(attrs.ngEnter);
        });
        event.preventDefault();
      }
    });
  };
})

angularWeatherApp.controller('MainController', function($scope, localStorageService) {
})

angularWeatherApp.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
