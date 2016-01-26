var assert = require('assert')
  , MCExpression = require('src/ast/mc-expression')
  , MCCompileExpression = require('src/ast/mc-compile-expression')
;

describe('MCCompileExpression#constructor', function(){

  var  mccompileexpression = new MCCompileExpression()
  ;

  it('should be instanceof MCExpression', function(){
    assert( mccompileexpression instanceof MCExpression );
  });

});
