var TE = require('template-engine')
  , templates = require('src/scripts/templates')
  , te = new TE(templates)
  , app = require('src/scripts/app')
;

window.addEventListener('ready', main);

function main(e)
{
  te.render( app, document.documentElement );
}
