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
  * @returns {Object|Object[]}
  *
  * @TODO Build method
  * @TODO Write unit test
  **/
  MCParser.prototype.generateMCDOM = function (str) {

  };

  /**
  * Parses a DOM text node value into a MCDOM hierarchy
  *
  * @function MCParser#parseTextNode
  * @param {string} str
  * @returns {Object|Object[]}
  *
  * @TODO Build method
  * @TODO Write unit test
  **/
  MCParser.prototype.parseTextNode = function (str) {
    var charBuf = str.split('')
      , charLast = null
      , charCur
      , isInMC = false
      , chunkCur = ''
      , chunks = []
    ;

    while(charCur = charBuf.shift())
    {
      if( !isInMC )
      {
        if( charCur == '{' && charLast == '{' )
        {
          // Found Beginning of an MC
          isInMC = true;
          if( chunkCur.length ) chunks.push(chunkCur)
          chunkCur = '';
          continue;
        }

      }
    }
  };

})();
