'use strict';

const preferSpacing = require('./rules/prefer-spacing');

module.exports = {
  configs: {
    recommended: {
      plugins: ['pangu'],
      rules: {
        'pangu/prefer-spacing': 'error',
      },
    },
  },
  rules: {
    'prefer-spacing': preferSpacing,
  },
};
