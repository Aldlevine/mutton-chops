var assert = require('assert')
  , MCNode = require('src/ast/mc-node')
;

describe("MCNode#addChild", function(){

  var mcnode = new MCNode()
    , child1 = new MCNode()
    , child2 = new MCNode()
  ;

  it('should throw error on non MCNode as child', function(){
    assert.throws( function(){ mcnode.addChild('hello') } );
  });

  it('should add child to children array', function(){
    mcnode.addChild(child1);
    mcnode.addChild(child2);
    assert( mcnode.children.indexOf(child1 == 0) );
    assert( mcnode.children.indexOf(child2 == 1) );
  });

  it('should move child to new index when added multiple times', function(){
    mcnode.addChild(child1);
    assert( mcnode.children.indexOf(child2 == 0) );
    assert( mcnode.children.indexOf(child1 == 1) );
  });

});
