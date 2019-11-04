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

For sample usage, you can check [examples](https://github.com/lakhansamani/babel-plugin-reduce-with-operator/tree/master/examples), or you can test on your [browser](https://babeljs.io/repl#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=PTAEBkFEDEBVQMoEkAilQC5SwBYFNQAbPAMwBdQBnASwBMCAHAQwDsCB7E0Mnay0PAA8mAWwbFQfUK0ksGAVwpl2oAMbzKykaABGTHXkKhx8gObUWAOlAAKHGTINKGEOZ7ydl1exHBCTAGscVkpRVmpgPQNCAFoTcxYYgCc8WnlVPBiAd2oeGPYGPCSmZSSASmsAKBBQADl2MmoM7mCKAAMUtIyAdVycAHlC4tK2yX5KHzweC1MWkrHQFgbjJiSKTlAAKSYANyYEVSTqBgpKQtVqEiaS6nYWaRZaaVp6J50ATxaCdU0fY0IzBZrAhqCJqP4koR3gAaUAdVLpPC9HiDIoldhJUZMfgkeQsVSNO7cQIzB6gApo0pwgDUWP4MlWpnkIjwLAoUiYhAmi2WzDW5K42z2ByOJweTwsZCS7C6qVAuk-PG-Gi0un0hn-gJYlWqYAASkgAOIACXgyDQWFwBCOpnsVDojFYHC4034QlE4gIHPu7EUCnWLvwahVfyiGviQN1oCQ7PpoCyGICpKF-0Oxwo3noah8nrIhk-TFo-COLFmyiIrCZTFMBDOeAuV1UNyJrCeOUIRnMOwISoEgnOeaeKUo8kIZEslW8LE0VGZoAAvKAANoARlhACZYQBmWEAFlhAFYALqWTqI5EDIbopI2allADck7uE2IlkI7FMNhHIgfOsqQA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=true&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2%2Cenv&prettier=false&targets=&version=7.6.4&externalPlugins=babel-plugin-reduce-with-operator%401.0.2).

## Credits 🙇‍♂️

- Tan Li Hau: https://lihautan.com/creating-custom-javascript-syntax-with-babel/
- Kent C Dodds: https://www.youtube.com/watch?v=VicU_XwriWw
- Babel Plugin Handbook: https://github.com/jamiebuilds/babel-handbook/blob/master/translations/en/plugin-handbook.md
