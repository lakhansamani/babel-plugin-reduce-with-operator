const babel = require('babel-core');
const plugin = require('../');

var data = [1,2,3,4,5];
function expectedResult(operator) {
    switch(operator) {
        case "+":
            return data.reduce((a, c) => a + c);
        case "-":
            return data.reduce((a, c) => a - c);
        case "*":
            return data.reduce((a, c) => a * c);
        case "/":
            return data.reduce((a, c) => a / c);
        case "%":
            return data.reduce((a, c) => a % c);
        
    }
}
function getTestData(operator) {
    return `
        var arr = [${data}];
        var res = arr.reduceWithOperator("${operator}");
    `
}

const operators = ["+", "-", "*", "/", "%"];

operators.forEach(item => {
    it(`test reduceWithOperator with "${item}"`, () => {
        var result = babel.transform(getTestData(item), {plugins: [plugin]});
        var f = new Function(`
          ${result.code};
          return res;
        `);
        var res = f();
        expect(res).toBe(expectedResult(item));
      });
})
