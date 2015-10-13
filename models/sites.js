/**
 * Created by andrey on 12.10.15.
 */

var mongoose = require('mongoose');

var SitesSchema = new mongoose.Schema({
  name: String,
  description: String,
  url: String,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sites', SitesSchema);