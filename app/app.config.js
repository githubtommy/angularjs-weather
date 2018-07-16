'use strict';

angular.
  module('angularWeatherApp')
  .config(['$locationProvider' ,'$routeProvider', 'localStorageServiceProvider',
    function config($locationProvider, $routeProvider, localStorageServiceProvider) {
      $locationProvider.hashPrefix('')
      localStorageServiceProvider.setPrefix("angularjs-weather")
      localStorageServiceProvider.setStorageType("sessionStorage")
      localStorageServiceProvider.setNotify(true, true)
      // If local storage not supported, fall back on cookies: these settings probably only work on localhost
      localStorageServiceProvider.setStorageCookie(45, '/', false)
      localStorageServiceProvider.setStorageCookieDomain('')

      $routeProvider.
        when('/home', {
          template: '<weather></weather>'
        }).
        when('/about', {
          template: '<about></about>'
        }).
        when('', {
          template: '<weather></weather>'
        }).
        otherwise('/home');
    }
  ]);
