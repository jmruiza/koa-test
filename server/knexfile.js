// Environment configurations
const config = require('./src/config')(false);
// Imports
const path = require('path');

const BASE_PATH = path.join(__dirname, 'db');

module.exports = {
  development: {
    client: 'pg',
    connection: config.CONNECTION_STRING_DEVELOPMENT,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  },
  production: {
    client: 'pg',
    connection: config.CONNECTION_STRING_PRODUCTION,
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }
};