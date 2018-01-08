'use strict';

const preferSpacing = require('./rules/prefer-spacing');

module.exports = {
  configs: {
    recommended: {
      plugins: ['jest'],
      rules: {
        'pangu/prefer-spacing': 'error',
      },
    },
  },
  rules: {
    'prefer-spacing': preferSpacing,
  },
};
