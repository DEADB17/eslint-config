/*eslint-env commonjs*/

const recommended = require('../rules/eslint-recommended');
const { es6Script } = require('../lib');

module.exports = es6Script(recommended);
