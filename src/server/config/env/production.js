'use strict';

//module.exports = {
//  env: 'production',
//  mongo: {
//    uri: process.env.MONGOLAB_URI ||
//      process.env.MONGOHQ_URL ||
//      'mongodb://localhost/fullstack'
//  }
//};

var _ = require('lodash');

var prodSettings = {
  env: 'production',
  mongo: {
    uri: process.env.MONGOLAB_URI ||
         process.env.MONGOHQ_URL ||
         'mongodb://localhost/fullstack'
  }
};

module.exports = _.merge(
  prodSettings,
  require('./productionoAuth.js') || {});