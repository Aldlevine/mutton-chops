var MCUtils = require('src/mc-utils')
;

module.exports = (function(){

  /**
  * @class MuttonChops
  * @param {Object|Function} opts
  **/
  function MuttonChops(opts)
  {
    var opts = MCUtils.defaults({}, opts);
  }
  /** **/

  /**
  * @function MuttonChops#compileString
  * @param {string} str
  * @returns {MCRenderable[]}
  *
  * @TODO Build method
  * @TODO Write unit test
  **/
  MuttonChops.prototype.compileString = function (str)
  {

  }

  /**
  * @function MuttonChops#compileFile
  * @param {string} fileName
  * @returns {MCRenderable[]}
  *
  * @TODO Build method
  * @TODO Write unit test
  **/
  MuttonChops.prototype.compileFile = function (fileName)
  {

  }

  return  MuttonChops;

})();
