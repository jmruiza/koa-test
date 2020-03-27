// Environment configurations
const config = require('../config')(false);
const settings = require('../knexfile.js')[config.NODE_ENV];

module.exports = require('knex')(settings);