var assert = require('assert')
  , _ = require('lodash')
  , MCUtils = require('src/mc-utils')
;

describe("MCUtils#defaults", function(){
  var testFn = function(){}
    , defaults = {a: 1, b: 2, c: {a: [1,2,3], b: /hello/g}, d: testFn}
    , objOpts = {a: 'a', c: {b: /moot/gi}}
    , fnOpts = function()
      {
        this.a = 'a';
        this.c.b = /moot/gi;
      }
    , expected = {a: 'a', b: 2, c: {a: [1,2,3], b: /moot/gi}, d: testFn}
  ;

  it('should properly copy defaults onto object', function(){
    assert(_.isEqual(MCUtils.defaults(defaults, objOpts), expected));
  });

  it('should properly overwite defaults with function', function(){
    assert(_.isEqual(MCUtils.defaults(defaults, fnOpts), expected));
  });

  it('should not mutate original defaults with function', function(){
    assert(MCUtils.defaults(defaults, fnOpts) != defaults);
  });

  it('should not mutate original options with defaults', function(){
    assert(MCUtils.defaults(defaults, objOpts) != objOpts);
  });

  it('should throw error if defaults are not an object', function(){
    assert.throws( function(){ MCUtils.defaults('not-an-object', {}) } );
    assert.throws( function(){ MCUtils.defaults(12345, {}) } );
  });

  it('should throw error if options are not an object or function', function(){
    assert.throws( function(){ MCUtils.defaults({}, 'not-an-object-or-function') } );
    assert.throws( function(){ MCUtils.defaults({}, 12345) } );
  });

});
