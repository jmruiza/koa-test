// Environment configurations
const config = require('../config')(false);
const settings = require('../../knexfile')[config.NODE_ENV];

module.exports = require('knex')(settings);