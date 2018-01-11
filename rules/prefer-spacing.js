'use strict';

const pangu = require('pangu');

function isImport(node) {
  return node.type === 'ImportDeclaration';
}

function isRequire(node) {
  return node.type === 'CallExpression' && node.callee.name === 'require';
}

module.exports = context => {
  return {
    Literal(node) {
      if (isImport(node.parent) || isRequire(node.parent)) return;

      if (typeof node.value === 'string') {
        const raw = node.raw;
        let quote = raw[0];
        const spaced =
          quote +
          node.raw
            .slice(1, node.raw.length - 1)
            .split('\\n')
            .map(l => pangu.spacing(l).trim())
            .join('\\n') +
          quote;

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
