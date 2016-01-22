var assert = require('assert')
  , MCChunk = require('src/mc-chunk')
;

describe("MCChunk#getType", function(){

  it('should read "block" type', function(){
    assert(MCChunk.getType('# hello') == 'block');
    assert(MCChunk.getType('  #   hello  ') == 'block');
    assert(MCChunk.getType('#> hello') == 'block');
  });

  it('should read "include" type', function(){
    assert(MCChunk.getType('> hello') == 'include');
    assert(MCChunk.getType('  >   hello  ') == 'include');
    assert(MCChunk.getType('># hello') == 'include');
  });

  it('should read "discreet" type', function(){
    assert(MCChunk.getType('hello') == 'discreet');
    assert(MCChunk.getType('   hello   ') == 'discreet');
    assert(MCChunk.getType('hello  >') == 'discreet');
    assert(MCChunk.getType('  hello  #  ') == 'discreet');
  });

});

describe('MCChunk#getValue', function(){
  it('should trim type identifier and trim leading/trailing whitespace from data', function(){
    assert(MCChunk.getValue('# hello') == 'hello');
    assert(MCChunk.getValue('  #   hello  ') == 'hello');
    assert(MCChunk.getValue('#> hello') == '> hello');
  });
});
