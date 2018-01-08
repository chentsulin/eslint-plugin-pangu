'use strict';

const RuleTester = require('eslint').RuleTester;
const rules = require('../../').rules;

const ruleTester = new RuleTester();

ruleTester.run('prefer-spacing', rules['prefer-spacing'], {
  valid: [
    'var text = "Mr. 龍島主道：「Let\'s Party! 各位高明博雅君子！」"',
    'var text = "Sephiroth 見他這等神情, 也是悚然一驚: 不知我這 Ultimate Destructive Magic 是否對付得了?"',
  ],

  invalid: [
    {
      code: 'var text = "Mr.龍島主道：「Let\'s Party!各位高明博雅君子！」"',
      errors: [
        {
          message: '為什麼你們就是不能加個空格呢？',
          column: 12,
          line: 1,
        },
      ],
      output: 'var text = "Mr. 龍島主道：「Let\'s Party! 各位高明博雅君子！」"',
    },

    {
      code:
        'var text = "Sephiroth見他這等神情,也是悚然一驚:不知我這Ultimate Destructive Magic是否對付得了?"',
      errors: [
        {
          message: '為什麼你們就是不能加個空格呢？',
          column: 12,
          line: 1,
        },
      ],
      output:
        'var text = "Sephiroth 見他這等神情, 也是悚然一驚: 不知我這 Ultimate Destructive Magic 是否對付得了?"',
    },
  ],
});
