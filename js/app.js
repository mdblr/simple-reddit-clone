(function() {
  'use strict';

  angular
    .module('simpleRedditClone', ['ngAnimate', 'ngRoute'])
    .config(config);

    config.$inject = ['$routeProvider', '$locationProvider'];

    function config($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: '../templates/home.html',
          controller: 'loadPageCtrl',
          controllerAs: 'home'
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
    }

})();
