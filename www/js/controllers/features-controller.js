'use strict'
angular.module('buyDemographicsApp')
  .controller('featuresCtrl', featuresController)

  featuresController.$inject = [];

  function featuresController () {
    const fCtrl = this;

    fCtrl.title = 'Features Controller';

    fCtrl.features = [{
      title : 'Quick and Convenient:',
      body : 'Create a complete, professional demographics report in under 60 seconds. Document is ready to print or send via E-mail.',
      img : '../../images/new-report.png'
    },{
      title: 'Your Company Branding:',
      body: "For each demographics report you create, you have the option of including your company's logo right on the report.",
      img : '../../images/brand_logo.png'
    },{
      title: '4 Full Page Demographic Maps:',
      body: 'Each demographics radius report includes 4 full-page maps showing population density, household density, household income and age of structures.',
      img : '../../images/demographic-map.png'
    },{
      title: 'Demographic Comparison Charts:',
      body: 'Each demographics radius report includes 3 color graphs showing population composition by sex, race and age.',
      img : '../../images/new-report.png'
    }]
  }
