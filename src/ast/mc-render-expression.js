var MCUtils = require('src/mc-utils')
  , MCExpression = require('src/ast/mc-expression')
;

module.exports = (function(){

  /**
   * A Mutton Chops render expression
   * @class MCRenderExpression
   * @extends MCExpression
   * @param {Object|Function} opts
   */
  function MCRenderExpression(opts)
  {
    var opts = MCUtils.defaults({

    }, opts);

    MCExpression.call(this, opts);
  }

  MCRenderExpression.prototype = Object.create(MCExpression.prototype);

  return MCRenderExpression;

})();
