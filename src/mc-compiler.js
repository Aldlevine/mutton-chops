var _ = require('lodash')
  , htmlparser = require('htmlparser')
  , MCUtils = require('src/mc-utils')
;

module.exports = (function(){

  /**
  * @class MCCompiler
  * @param {Object|Function} opts
  **/
  function MCCompiler(opts)
  {

  }

  /**
  * @function MCCompiler#compileString
  * @param {string} str
  * @returns {MCRenderable[]}
  *
  * @TODO Build method
  * @TODO Write unit test
  **/
  MCCompiler.prototype.compileString = function (str)
  {

  }

  /**
  * @function MCCompiler#compileFile
  * @param {string} fileName
  * @returns {MCRenderable[]}
  *
  * @TODO Build method
  * @TODO Write unit test
  **/
  MCCompiler.prototype.compileFile = function (fileName)
  {

  }

  return MCCompiler;

})();
