module.exports = (function(){

  /**
   * A Mutton Chops Node
   * @class MCNode
   * @param {Object|Function} opts
   */
  function MCNode(opts)
  {
    var opts = MCUtils.defaults({
      value: null,
      children: []
    }, opts);

    /** @member MCNode#value {string|MCExpression} The MCNode's value **/
    this.value = opts.value;

    /** @member MCNode#children {MCNode[]} An array of child nodes **/
    this.children = opts.children;
  }

  /**
   * Add a child node to this node
   * @method MCNode#addChild - Add a child node to this node
   * @param {MCNode} child - The child node to add
   * @returns {MCNode} this
   */
  MCNode.prototype.addChild = function (child) {
    if( !(child instanceof MCNode) )
    {
      throw(new Error("MCUtils#addChild: expected arg[0] child to be MCNode"));
    }
    var index = this.children.indexOf(child);
    if( index >= 0 ) this.children.splice(index, 1);
    this.children.push(child);

    return this;
  };

  return MCNode;

})();
