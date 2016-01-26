var MCUtils = require('src/mc-utils')
  , MCExpression = require('src/ast/mc-expression')
;

module.exports = (function(){
  /**
   * An Mutton Chops attributes object
   * @class MCAttribExpression
   * @extends MCExpression
   * @param {Object|Function} opts
   */
  function MCAttribExpression(opts)
  {
    var opts = MCUtils.defaults({
      type: null,
      args: []
    }, opts);

    MCExpression.call(this, opts);

    /** @member MCAttribExpression#type {string} - The type of expression  **/
    this.type = opts.type

    /** @member MCAttribExpression#args {string[]} - The arguments passed into the expression **/
    this.args = opts.args;
  }

  MCAttribExpression.prototype = Object.create(MCExpression.prototype);

})();
