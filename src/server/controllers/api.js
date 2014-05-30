'use strict';

var mongoose = require('mongoose'),
    Thing = mongoose.model('Thing'),
    PlanTemplate = mongoose.model('PlanTemplate');

/**
 * Get awesome things
 */
exports.awesomeThings = function(req, res) {
  return Thing.find(function (err, things) {
    if (!err) {
      return res.json(things);
    } else {
      return res.send(err);
    }
  });
};

exports.planTemplates = function(req, res) {
    return PlanTemplate.find(function (err, planTemplates) {
        if (!err) {
            return res.json(planTemplates);
        } else {
            return res.send(err);
        }
    });
};