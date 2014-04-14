'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Thing Schema
 */
var PlanTemplateSchema = new Schema({
    name: String
});

mongoose.model('PlanTemplate', PlanTemplateSchema);