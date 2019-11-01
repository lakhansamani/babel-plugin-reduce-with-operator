const babel = require('babel-core');
const plugin = require('../');

var example = `
    var arr = [1,2];
    var res = arr.reduceWithOperator("+");
`

it('test reduceWithOperator', () => {
    var result = babel.transform(example, {plugins: [plugin]});
    console.log(result.code);
    var f = new Function(`
      ${result.code};
      return res;
    `);
    var res = f();
    expect(res).toBe(3);
  });
