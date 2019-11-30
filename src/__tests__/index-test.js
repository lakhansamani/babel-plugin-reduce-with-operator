const babel = require('@babel/core');
const plugin = require('../');

const data = [1, 2, 3, 4, 5];
function expectedResult(operator, initialValue) {
	switch (operator) {
		case '+':
			return initialValue
				? data.reduce((a, c) => a + c, initialValue)
				: data.reduce((a, c) => a + c);
		case '-':
			return initialValue
				? data.reduce((a, c) => a - c, initialValue)
				: data.reduce((a, c) => a - c);
		case '*':
			return initialValue
				? data.reduce((a, c) => a * c, initialValue)
				: data.reduce((a, c) => a * c);
		case '/':
			return initialValue
				? data.reduce((a, c) => a / c, initialValue)
				: data.reduce((a, c) => a / c);
		case '%':
			return initialValue
				? data.reduce((a, c) => a % c, initialValue)
				: data.reduce((a, c) => a % c);
	}
}

function getTestData(operator, initialValue) {
	return `
		const arr = [${data}];
		const res = arr.reduceWithOperator(${operator}${initialValue ? `, ${initialValue}` : ''});
	`;
}

const operators = ['+', '-', '*', '/', '%'];

operators.forEach(item => {
	it(`test reduceWithOperator with "${item}"`, () => {
		const result = babel.transform(getTestData(item), { plugins: [plugin] });
		const f = new Function(`
			${result.code};
			return res;
		`);
		const res = f();
		expect(res).toBe(expectedResult(item));
	});
});

it(`test reduceWithOperator whitespace "+  "`, () => {
	const result = babel.transform(getTestData('+  '), { plugins: [plugin] });
	const f = new Function(`
			${result.code};
			return res;
		`);
	const res = f();
	expect(res).toBe(expectedResult('+'));
});

operators.forEach(item => {
	it(`test reduceWithOperator with "${item}" + initial value "5"`, () => {
		const result = babel.transform(getTestData(item, 5), { plugins: [plugin] });
		const f = new Function(`
			${result.code};
			return res;
		`);
		const res = f();
		expect(res).toBe(expectedResult(item, 5));
	});
});
