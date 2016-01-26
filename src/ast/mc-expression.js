var MCUtils = require('src/mc-utils')
;

module.exports = (function(){

  /**
   * A Mutton Chops expression representation
   * @class MCExpression
   * @param {Object|Function} opts
   */
  function MCExpression(opts)
  {
    var opts = MCUtils.defaults({
      value: null
    }, opts);

    /** @member MCExpression#value {string} **/
    this.value = opts.value;
  }

  return MCExpression;

})();
