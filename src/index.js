module.exports = function(babel) {
    const { types: t } = babel;

    return {
      name: "string-reducer",
      visitor: {
        CallExpression(path) {
          if (path.node.callee.property.name === "reduceWithOperator" && path.node.arguments[0].type === "StringLiteral" && path.node.arguments[0].value === "+") {
            const identifiers = [t.identifier("a"), t.identifier("c")];
            const arg = t.arrowFunctionExpression(
              identifiers,
              t.binaryExpression("+", identifiers[0], identifiers[1])
            );
            path.node.callee.property.name = 'reduce';
            path.node.arguments[0] = arg;
          }
          return;
        }
      }
    };
  }
  