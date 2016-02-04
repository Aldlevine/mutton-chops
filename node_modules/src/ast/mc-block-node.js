var MCUtils = require('src/mc-utils')
  , MCNode = require('src/ast/mc-node')
;

module.exports = (function(){

  /**
   * A Mutton Chops block representation
   * @class MCBlockNode
   * @extends MCNode
   * @param {Object|Function} opts
   */
  function MCBlockNode(opts)
  {
    var opts = MCUtils.defaults({

    }, opts);

    MCNode.call(this, opts);
  }

  MCBlockNode.prototype = Object.create(MCNode.prototype);

  return MCBlockNode;

})();
