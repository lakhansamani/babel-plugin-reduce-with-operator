module.exports = function(babel) {
	const { types: t } = babel;

	return {
		name: 'string-reducer',
		visitor: {
			CallExpression(path) {
				const operators = ['+', '-', '*', '/', '%'];
				if (
					path.node.callee.property.name === 'reduceWithOperator' &&
					path.node.arguments[0].type === 'StringLiteral' &&
					operators.indexOf(path.node.arguments[0].value) > -1
				) {
					const identifiers = [t.identifier('a'), t.identifier('c')];
					const arg = t.arrowFunctionExpression(
						identifiers,
						t.binaryExpression(path.node.arguments[0].value, identifiers[0], identifiers[1]),
					);
					path.node.callee.property.name = 'reduce';
					path.node.arguments[0] = arg;
				}
				return;
			},
		},
	};
};
