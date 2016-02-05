var acorn = require('acorn')
  , uglify = require('uglify-js')
;

module.exports = function(str)
{
  var parser = null;
  var a_ast = acorn.parse(str, {onToken: function(){parser = this}});
  parser.options = {};

  if(a_ast.body.length > 1) throw 'Too Many Expressions!!!';
  var exp = a_ast.body[0];
  if(exp.type != 'ExpressionStatement') throw 'Invalid Expression';

  var retNode = new acorn.Node(parser, 0, 0);
  retNode.type = 'ReturnStatement';
  retNode.argument = exp;
  a_ast.body[0] = retNode;

  var ast = uglify.AST_Node.from_mozilla_ast(a_ast);
  var stream = uglify.OutputStream();
  ast.print(stream);
  return 'function(){'+stream+'}';
}
