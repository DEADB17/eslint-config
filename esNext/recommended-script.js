/*eslint-env commonjs*/

const recommended = require('../conf/eslint-recommended');
const { esNextScript } = require('../lib');

module.exports = esNextScript(recommended);
