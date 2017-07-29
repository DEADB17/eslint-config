/*eslint-env commonjs*/

const recommended = require('../conf/eslint-recommended');
const { es5 } = require('../lib');

module.exports = es5(recommended);
