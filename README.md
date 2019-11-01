# babel-plugin-reduce-with-operator

This plugin allows you reduce an array, without writing callback function. Example `arr.reduceWithOperator("+")`. It looks for `reduceWithOperator` member function call and converts it into native `reduce` function with a callback. Currently it supports `+`, `-`, `*`, `/` and `%` operators.

## Installation

- Install plugin

```bash
yarn add @lakhansamani/babel-plugin-reduce-with-operator -D
```

- Add plugin your babel configuration file, i.e. `.babelrc`

```js
{
  ...
  "plugins": [
    "babel-plugin-reduce-with-operator"
  ]
}

```
