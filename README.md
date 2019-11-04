# babel-plugin-reduce-with-operator

This plugin allows you reduce an array, without writing callback function. Example `arr.reduceWithOperator(+)`. It looks for `reduceWithOperator` member function call and converts it into native `reduce` function with a callback. Currently it supports `+`, `-`, `*`, `/` and `%` operators.

> **Note:** This plugin uses [custom parser](https://github.com/lakhansamani/babel/tree/operator-parser) to support operators as arguments. 

## Installation 🛠

- Install plugin

  ```bash
  yarn add babel-plugin-reduce-with-operator -D
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

## Usage 💻

```js
const arr = [1,2,3];
const sum = arr.reduceWithOperator(+);
console.log(sum); // 6
```

For sample usage, you can check [examples](https://github.com/lakhansamani/babel-plugin-reduce-with-operator/tree/master/examples)

## Credits 🙇‍♂️
* Tan Li Hau: https://lihautan.com/creating-custom-javascript-syntax-with-babel/
* Kent C Dodds: https://www.youtube.com/watch?v=VicU_XwriWw
* Babel Plugin Handbook: https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md 
