const babel = require('babel-core');
const plugin = require('../');

const data = [1,2,3,4,5];
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
        const arr = [${data}];
        const res = arr.reduceWithOperator("${operator}");
    `
}

const operators = ["+", "-", "*", "/", "%"];

operators.forEach(item => {
    it(`test reduceWithOperator with "${item}"`, () => {
        const result = babel.transform(getTestData(item), {plugins: [plugin]});
        const f = new Function(`
          ${result.code};
          return res;
        `);
        const res = f();
        expect(res).toBe(expectedResult(item));
      });
})
