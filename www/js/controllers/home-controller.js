'use strict'
angular.module('buyDemographicsApp')
  .controller('homeCtrl', homeController)

  homeController.$inject = [];

  function homeController () {
    const hCtrl = this;

    hCtrl.title = 'Home Controller';
  }
