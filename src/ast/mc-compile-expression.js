var MCUtils = require('src/mc-utils')
  , MCExpression = require('src/ast/mc-expression')
;

module.exports = (function(){

  /**
   * A Mutton Chops compiler expression
   * @class MCCompileExpression
   * @extends MCExpression
   * @param {Object|Function} opts
   */
  function MCCompileExpression(opts)
  {
    var opts = MCUtils.defaults({

    }, opts);

    MCExpression.call(this, opts);
  }

  MCCompileExpression.prototype = Object.create(MCExpression.prototype);

  return MCCompileExpression;

})();
