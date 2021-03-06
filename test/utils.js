var assert = require('assert')
  , _ = require('lodash')
  , Utils = require('src/utils')
;

describe("Utils#defaults", function(){
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
    assert(_.isEqual(Utils.defaults(defaults, objOpts), expected));
  });

  it('should properly overwite defaults with function', function(){
    assert(_.isEqual(Utils.defaults(defaults, fnOpts), expected));
  });

  it('should not mutate original defaults with function', function(){
    assert(Utils.defaults(defaults, fnOpts) != defaults);
  });

  it('should not mutate original options with defaults', function(){
    assert(Utils.defaults(defaults, objOpts) != objOpts);
  });

  it('should throw error if defaults are not an object', function(){
    assert.throws( function(){ Utils.defaults('not-an-object', {}) } );
    assert.throws( function(){ Utils.defaults(12345, {}) } );
  });

  it('should throw error if options are not an object or function', function(){
    assert.throws( function(){ Utils.defaults({}, 'not-an-object-or-function') } );
    assert.throws( function(){ Utils.defaults({}, 12345) } );
  });

});
