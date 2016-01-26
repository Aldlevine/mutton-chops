var assert = require('assert')
  , MCExpression = require('src/ast/mc-expression')
  , MCRenderExpression = require('src/ast/mc-render-expression')
;

describe('MCRenderExpression#constructor', function(){

  var  mcrenderexpression = new MCRenderExpression()
  ;

  it('should be instanceof MCExpression', function(){
    assert( mcrenderexpression instanceof MCExpression );
  });

});
