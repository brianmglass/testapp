

/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');
var Funnel     = require('broccoli-funnel');
var MergeTrees = require('broccoli-merge-trees');
var log        = require('broccoli-stew').log;
var branding   = 'vw';

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    'ember-bootstrap': {
      'bootstrapVersion': 3,
      'importBootstrapFont': true,
      'importBootstrapCSS': false
    },

    sassOptions:{
      includePaths: ['vendor/branding/'+branding+'/styles/']
    }

  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //

  //app.import('vendor/branding/'+branding+'/locales/'+branding+'/translations.js');
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.


  var brandingAssets = new Funnel('vendor/branding/'+branding+'/assets/', 
      {
          destDir: '/assets'
      });    

  return app.toTree(brandingAssets);
  
};
