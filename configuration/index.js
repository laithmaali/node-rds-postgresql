var _ = require('lodash');
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// All configurations will extend these options
// ============================================
var all = {
    env: process.env.NODE_ENV,
    locale: "NA",
    createdBy: ""
};

// Export the config object based on the NODE_ENV
// ==============================================
var AppConfig = _.merge(
    all,
    require('./env/all.js') || {},
    require('./env/' + process.env.NODE_ENV + '.js') || {});

global.AppConfig = AppConfig;

