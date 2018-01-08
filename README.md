# eslint-plugin-pangu

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
