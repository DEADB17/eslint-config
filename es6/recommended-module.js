/*eslint-env commonjs*/

const recommended = require('../rules/eslint-recommended');
const { es6Module } = require('../lib');

module.exports = es6Module(recommended);
