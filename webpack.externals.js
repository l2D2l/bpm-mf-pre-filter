// const webpack = require('webpack');
// module.exports = {
//     "externals": {
//         "rxjs": "rxjs",
//         "@angular/core": "ng.core",
//         "@angular/common": "ng.common",
//         "@angular/common/http": "ng.common.http",
//         "@angular/platform-browser": "ng.platformBrowser",
//         "@angular/platform-browser-dynamic": "ng.platformBrowserDynamic",
//         "@angular/compiler": "ng.compiler",
//         "@angular/elements": "ng.elements",

//         // Uncomment and add to scripts in angular.json if needed
//         // "@angular/router": "ng.router",
//         // "@angular/forms": "ng.forms"
//     }
// }

const path = require('path');

module.exports = {
  entry: {
    'bpm-mf-pre-filter': [
      path.resolve(__dirname, '../../dist/bpm-mf-pre-filter/polyfills-es2015.js'),
      path.resolve(__dirname, '../../dist/bpm-mf-pre-filter/main-es2015.js')
    ]
  },
  output: {
    filename: '[name].vendor.js',
    path: path.resolve(__dirname, '../../build/'),
  }
}