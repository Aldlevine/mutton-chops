var assert = require('assert')
  , MCNode = require('src/ast/mc-node')
  , MCDOMNode = require('src/ast/mc-dom-node')
;

describe('MCDOMNode#constructor', function(){

  var  mcdomnode = new MCDOMNode()
  ;

  it('should be instanceof MCNode', function(){
    assert( mcdomnode instanceof MCNode );
  });
  
});
