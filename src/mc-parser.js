var _ = require('lodash')
  , htmlparser = require('htmlparser')
  , MCUtils = require('src/mc-utils')
;

module.exports = (function(){

  /**
  * @class MCParser
  * @param {Object|Function} opts
  **/
  function MCParser(opts)
  {
    var opts = MCUtils.defaults({}, opts);
  }

  /**
  * Creates an object containing the MuttonChops hierarchy.
  * Follows HTML hierarchy, but takes it a step further with MC syntax
  *
  * @function MCParser#generateMCDOM
  * @param {string} str
  * @returns {Object}
  *
  * @TODO Build method
  * @TODO Write unit test
  **/
  MCParser.prototype.generateMCDOM = function (str) {

  };

})();
