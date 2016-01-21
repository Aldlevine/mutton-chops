var MuttonChops = require('mutton-chops/browser')
  , templates = require('src/scripts/templates')
  , mc = new MuttonChops({templates: templates})
  , app = require('src/scripts/app')
;

window.addEventListener('ready', main);

function main(e)
{
  mc.render( app, document.documentElement );
}
