angular
  .module('angularColor',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: "templates/home.html",
        controller: 'HomeController'
      })
      .when('/scheme', {
        templateUrl: "templates/scheme.html",
        controller: 'SchemeController'
      })
  })
