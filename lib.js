/*eslint-env commonjs*/

const strict = require('./rules/strict.json');
const recommended = require('./rules/eslint-recommended.json');

const ES5 = 5;
const ES6 = 6;
const SCRIPT = 'script';
const MODULE = 'module';

function setEsVersion(v, ob) {
    ob.ecmaVersion = v;
    return ob;
}

function setSourceType(type, ob) {
    ob.sourceType = type;
    return ob;
}

function makeParserOpts(v, type) {
    const ob = {};
    return setSourceType(type, setEsVersion(v, ob));
}

function setParserOptions(opts, ob) {
    ob.parserOptions = opts;
    return ob;
}

const es5 = setParserOptions.bind(null, makeParserOpts(ES5, SCRIPT));
const es6Script = setParserOptions.bind(null, makeParserOpts(ES6, SCRIPT));
const es6Module = setParserOptions.bind(null, makeParserOpts(ES6, MODULE));

module.exports = {
    strict,
    recommended,
    es5,
    es6Script,
    es6Module,
};
