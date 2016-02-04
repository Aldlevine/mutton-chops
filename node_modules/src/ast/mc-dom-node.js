var MCUtils = require('src/mc-utils')
  , MCNode = require('src/ast/mc-node')
;

module.exports = (function(){

  /**
   * @typedef {Object} DOMAttribute
   * @memberof MCDOMNode
   * @inner
   * @property {string} type
   * @property {string|MCExpression} value
   */


  /**
   * A Mutton Chops representation of a DOM Node
   * @class MCDOMNode
   * @extends MCNode
   * @param {Object|Function} opts
   */
  function MCDOMNode(opts)
  {
    var opts = MCUtils.defaults({
      type: 'tag',
      attribs: [],
      mcAttribs: []
    }, opts);

    MCNode.call(this, opts);

    /** @member MCDOMNode#type {'tag'|'text'|'comment'} The type of DOM node represented in this instance **/
    this.type = opts.type;

    /** @member MCDOMNode#attribs {DOMAttribute[]} An array of DOMNode attributes **/
    this.attribs = opts.attribs;
  }

  MCDOMNode.prototype = Object.create(MCNode.prototype);

  return MCDOMNode;

})();
