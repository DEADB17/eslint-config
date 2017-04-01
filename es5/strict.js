/*eslint-env commonjs*/

const strict = require('../rules/strict');
const { es5 } = require('../lib');

module.exports = es5(strict);
