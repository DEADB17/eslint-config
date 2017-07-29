/*eslint-env commonjs*/

const recommended = require('../conf/eslint-recommended');
const { es6Script } = require('../lib');

module.exports = es6Script(recommended);
