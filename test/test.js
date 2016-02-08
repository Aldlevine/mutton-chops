process.env.NODE_PATH = __dirname+'/../';
require('module').Module._initPaths();

require('./utils');
require('./mc-chunk');

require('./ast/mc-node');
require('./ast/mc-dom-node');
require('./ast/mc-block-node');

require('./ast/mc-compile-expression');
require('./ast/mc-render-expression');
