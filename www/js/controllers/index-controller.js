'use strict'
angular.module('buyDemographicsApp')
  .controller('indexCtrl', indexController)

  indexController.$inject = [];

  function indexController () {
    const iCtrl = this;

    iCtrl.title = 'Index Controller';
  }
