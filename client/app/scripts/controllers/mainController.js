// script.js

// create the module and name it scotchApp
// also include ngRoute for all our routing needs
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
  $routeProvider

  // route for the home page
    .when('/', {
      templateUrl: '/UKCWeb/src/views/partials/home.html',
      controller: 'mainController'
    })

    // route for the about page
    .when('/about', {
      templateUrl: '/UKCWeb/src/views/partials/about.html',
      controller: 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
      templateUrl: '/UKCWeb/src/views/partials/contact.html',
      controller: 'contactController'
    })
    // route for the contact page
    .when('/services', {
      templateUrl: '/UKCWeb/src/views/partials/services.html',
      controller: 'contactController'
    })
    .when('/login-succesful', {
      controller: 'LoginSuccesfulController',
      templateUrl: '/UKCWeb/src/views/partials/login-sucesful.html',
      controllerAs: 'vm'
    })

    .when('/login', {
      controller: 'LoginController',
      templateUrl: '/UKCWeb/src/login/index.html',
      controllerAs: 'vm'
    })

    .when('/register', {
      controller: 'RegisterController',
      templateUrl: '/UKCWeb/src/views/partials/register.html',
      controllerAs: 'vm'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope) {
  // create a message to display in our view
  $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function ($scope) {
  $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function ($scope) {
  $scope.message = 'Contact us! JK. This is just a demo.';
});
