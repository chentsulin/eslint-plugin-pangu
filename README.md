# eslint-plugin-pangu

[![npm](https://img.shields.io/npm/v/eslint-plugin-pangu.svg?style=flat-square)](https://www.npmjs.com/package/eslint-plugin-pangu)
[![build](https://travis-ci.org/chentsulin/eslint-plugin-pangu.svg?branch=master)](https://travis-ci.org/chentsulin/eslint-plugin-pangu)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Installation

```
$ npm install --dev eslint eslint-plugin-pangu
```

## Usage

Add `pangu` to the plugins section of your `.eslintrc` configuration file. You
can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["pangu"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "pangu/prefer-spacing": "error"
  }
}
```

## Shareable configurations

### Recommended

This plugin exports a recommended configuration that enforces good testing
practices.

To enable this configuration use the `extends` property in your `.eslintrc`
config file:

```json
{
  "extends": ["plugin:pangu/recommended"]
}
```

See
[ESLint documentation](http://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information about extending configuration files.

## Credit

* [pangu.js](https://github.com/vinta/pangu.js/)
