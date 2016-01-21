var _ = require('lodash')
;

module.exports = (function(){

  /**
    @namespace MCUtils
  **/
  MCUtils = {};

  /**
  * Takes an object of defaults and an object of options or a function that sets the options to 'this'
  * @function MCUtils.defaults
  * @param {Object} defs - An object of defaults
  * @param {Object|Function} opts - An object of options, or a function
  * @returns {Object}
  *
  * @example
  * // uses an object as the options
  * // returns {a: 'one', b: 2, c: {d: 3, e: 'four'}}
  * MCUtils.defaults({a: 1, b: 2, c: {d: 3, e: 4}}, {a: 'one', c: {e: 'four'}})
  *
  * @example
  * // uses a function to set the options
  * // returns {a: 'one', b: 2, c: {d: 3, e: 'four'}}
  * MCUtils.defaults({a: 1, b: 2, c: {d: 3, e: 4}}, function(){
  *   this.a = 'one';
  *   this.c.e = 'four';
  * })
  **/
  MCUtils.defaults = function (defs, opts)
  {
    if( !_.isObject(defs) )
    {
      throw(new Error('MCUtils.defaults: expected arg[0] opts be object-like'));
    }

    if( _.isFunction(opts) )
    {
      opts.call(_.cloneDeep(defs));
    }
    else if( _.isObject(opts) )
    {
      _.defaults(defs, opts)
    }
    else
    {
      throw(new Error("MCUtils.defauts: expected arg[1] opts be object-like or function"));
    }
  }

  return MCUtils;

})();
