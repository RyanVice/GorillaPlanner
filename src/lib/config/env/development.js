'use strict';

module.exports = {
  env: 'development',
  mongo: {
    uri: 'mongodb://localhost/fullstack-dev'
  }
};

//var _ = require('lodash');
//
//var devSettings = {
//  env: 'development',
//  mongo: {
//    uri: 'mongodb://localhost/fullstack-dev'
//  }
//};

module.exports = _.merge(
  devSettings,
  require('./developmentoAuth.js') || {});
