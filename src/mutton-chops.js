process.env.NODE_PATH = __dirname+'/../';
require('module').Module._initPaths();

var MCUtils = require('src/mc-utils')
;

console.log(require);

module.exports = (function(){

  /**
   * @class MuttonChops
   * @param {Object|Function} opts
   */
  function MuttonChops(opts)
  {
    var opts = MCUtils.defaults({}, opts);
  }

  return  MuttonChops;

})();
