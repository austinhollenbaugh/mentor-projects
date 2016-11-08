angular.module('routingApp', ['ui.router'])
  .config(function($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'views/home.html'
      })
      .state('signup', {
        url: '/signup',
        templateUrl: 'views/signup.html'
      })
      .state('details', {
        url: '/details',
        templateUrl: 'views/details.html'
      });
  });
