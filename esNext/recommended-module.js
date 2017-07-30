/*eslint-env commonjs*/

const recommended = require('../conf/eslint-recommended');
const { esNextModule } = require('../lib');

module.exports = esNextModule(recommended);
