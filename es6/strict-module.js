/*eslint-env commonjs*/

const strict = require('../rules/strict');
const { es6Module } = require('../lib');

module.exports = es6Module(strict);
