module.exports = (function() {

  /**
  * @class MCChunk
  * @param {string} data - The raw data to be included in the MCChunk
  **/
  function MCChunk(data)
  {
    /** @member {string} MCChunk#data **/
    this.data = data;

    /** @member {('discreet'|'block'|'include')} MCChunk#type **/
    this.type = MCChunk.getType(data);

    /** @member {string} MCChunk#value **/
    this.value = MCChunk.getValue(data);
  }

  /**
  * @function MCChunk.getType
  * @param {string} data
  * @returns {'discreet'|'block'|'include'}
  **/
  MCChunk.getType = function(data)
  {
    var tmp = data.replace(/^\s+/, '')
      , char0 = tmp.charAt(0)
    ;
    switch(char0)
    {
      case '#': return 'block';
      case '>': return 'include';
      default: return 'discreet';
    }
  }

  /**
  * @function MCChunk.getValue
  * @param {string} data
  * @returns {string}
  **/
  MCChunk.getValue = function(data)
  {
    return data.replace(/^\s*(#|>){0,1}\s*/, '').replace(/\s+$/, '');
  }

  return MCChunk;

})();