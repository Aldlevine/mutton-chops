var _ = require('lodash')
  , htmlparser = require('htmlparser')
  , fs = require('fs')
  , util = require('util')
;

var handler = new htmlparser.DefaultHandler(function(err, dom){
  if( err ) return console.log(err);
  console.log(util.inspect(dom, {depth: null, colors: true}));
}, {verbose: false, ignoreWhitespace: true});

var parser = new htmlparser.Parser(handler);

fs.readFile('./playground-templates.mutton', function(err, html){
  parser.parseComplete(html);
});
