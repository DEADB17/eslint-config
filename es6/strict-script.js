/*eslint-env commonjs*/

const strict = require('../rules/strict');
const { es6Script } = require('../lib');

module.exports = es6Script(strict);
