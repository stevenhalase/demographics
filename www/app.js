'use strict'
angular.module('buyDemographicsApp', ['ui.router'])
  .config(buyDemographicsConfig)

  buyDemographicsConfig.$inject = ['$stateProvider', '$urlRouterProvider']

  function buyDemographicsConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl : 'partials/home.html',
        controller  : 'homeCtrl as hCtrl'
      })
      .state('features', {
        url: '/features',
        templateUrl : 'partials/features.html',
        controller  : 'featuresCtrl as fCtrl'
      })

      $urlRouterProvider.otherwise('/')
  }
