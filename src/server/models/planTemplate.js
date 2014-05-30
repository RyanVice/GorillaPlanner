'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
 * Thing Schema
 */
var PlanTemplateSchema = new Schema({
    name: String,
    enabled: Boolean
});

mongoose.model('PlanTemplate', PlanTemplateSchema);