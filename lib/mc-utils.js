var _ = require('lodash')
;

var MCUtils = module.exports = {};

MCUtils.defaults = function(frm, to)
{
  if( !_.isObject(frm) )
  {
    throw(new Error('MCUtils.defaults: expected arg[0] to be object-like'));
  }

  if( _.isFunction(to) )
  {
    to.call(_.cloneDeep(frm));
  }
  else if( _.isObject(to) )
  {
    _.defaults(frm, to)
  }
  else
  {
    throw(new Error("MCUtils.defauts: expected arg[1] to be object-like or function"));
  }
}
