'use strict';

const pangu = require('pangu');

module.exports = context => {
  return {
    Literal(node) {
      if (typeof node.value === 'string') {
        const raw = node.raw;
        const spaced = pangu.spacing(node.raw);

        if (spaced !== raw) {
          context.report({
            node,
            message: '為什麼你們就是不能加個空格呢？',
            fix(fixer) {
              return fixer.replaceText(node, spaced);
            },
          });
        }
      }
    },
  };
};
