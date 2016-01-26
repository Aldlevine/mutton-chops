var assert = require('assert')
  , MCNode = require('src/ast/mc-node')
  , MCBlockNode = require('src/ast/mc-block-node')
;

describe('MCBlockNode#constructor', function(){

  var  mcblocknode = new MCBlockNode()
  ;

  it('should be instanceof MCNode', function(){
    assert( mcblocknode instanceof MCNode );
  });

});
