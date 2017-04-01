/*eslint-env commonjs*/

const recommended = require('../rules/eslint-recommended');
const { es5 } = require('../lib');

module.exports = es5(recommended);
