// Configs
const development = require('./datasources.development.json');
const staging = require('./datasources.staging.json');
const production = require('./datasources.json');

let datasources;

switch (process.env.NODE_ENV) {
  case 'development': datasources = development; break;
  case 'staging': datasources = staging; break;
  case 'production': datasources = production; break;
  default: datasources = development; break;
}

module.exports = datasources;
