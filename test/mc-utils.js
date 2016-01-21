var assert = require('assert')
  , _ = require('lodash')
  , MCUtils = require('lib/mc-utils')
;

describe("MCUtils#defaults", function(){
  var defaults = {a: 1, b: 2, c: {a: [1,2,3], b: /hello/g}, d: function(){}}
    , objOpts = {a: 'a', c: {b: /moot/gi}}
    , fnOpts = function()
      {
        this.a = 'a';
        this.c = {
          b: /moot/gi
        };
      }
    , expected = {a: 'a', b: 2, c: {a: [1,2,3], b: /moot/gi}, d: function(){}}
  ;

  it('should properly copy defaults onto object', function(){
    assert(_.isEqual(MCUtils.defaults(defaults, objOpts)));
  });

  it('should properly overwite defaults with function', function(){
    assert(_.isEqual(MCUtils.defaults(defaults, fnOpts)));
  });

  it('should not mutate original defaults with function', function(){
    assert(MCUtils.defaults(defaults, fnOpts) != defaults);
  });

  it('should throw error if defaults are not an object', function(){
    assert.throws( function(){ MCUtils.defaults('not-an-object', {}) } );
    assert.throws( function(){ MCUtils.defaults(12345, {}) } );
  });

  it('should throw error if options are not an object or function()', function(){
    assert.throws( function(){ MCUtils.defaults({}, 'not-an-object-or-function') } );
    assert.throws( function(){ MCUtils.defaults({}, 12345) } );
  });

});
