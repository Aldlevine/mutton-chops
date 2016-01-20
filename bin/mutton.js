#!/usr/bin/env node

var argv = require('yargs')
  .usage('Usage: $0 [options] --input [file] --output [file]')
  .option('input', {
    alias: 'i',
    demand: true,
    describe: 'Input file',
    type: 'string'
  })
  .option('output', {
    alias: 'o',
    demand: true,
    describe: 'Output file',
    type: 'string'
  })
  .argv
;

console.log('Hello World');
console.log(argv);
