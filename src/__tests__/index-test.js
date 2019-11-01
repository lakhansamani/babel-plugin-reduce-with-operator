const babel = require('babel-core');
const plugin = require('../');

var add = `
    var arr = [1,2,3,4,5];
    var res = arr.reduceWithOperator("+");
`

it('test reduceWithOperator with "+"', () => {
    var result = babel.transform(add, {plugins: [plugin]});
    var f = new Function(`
      ${result.code};
      return res;
    `);
    var res = f();
    expect(res).toBe(15);
  });

var subtract = `
    var arr = [1,2,3,4,5];
    var res = arr.reduceWithOperator("-");
`
it('test reduceWithOperator with "-"', () => {
    var result = babel.transform(subtract, {plugins: [plugin]});
    var f = new Function(`
        ${result.code};
        return res;
    `);
    var res = f();
    expect(res).toBe(-13);
});
