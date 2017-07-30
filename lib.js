/*eslint-env commonjs*/

const ES5 = 5;
const ES6 = 6;
const ES_NEXT = 2017;
const SCRIPT = 'script';
const MODULE = 'module';

function makeParserOpts(version, type) {
    return {
        ecmaVersion: version,
        sourceType: type,
    };
}

function setParserOptions(opts, ob) {
    ob.parserOptions = opts;
    return ob;
}

const es5 = setParserOptions.bind(null, makeParserOpts(ES5, SCRIPT));
const es6Script = setParserOptions.bind(null, makeParserOpts(ES6, SCRIPT));
const es6Module = setParserOptions.bind(null, makeParserOpts(ES6, MODULE));
const esNextScript = setParserOptions.bind(null, makeParserOpts(ES_NEXT, SCRIPT));
const esNextModule = setParserOptions.bind(null, makeParserOpts(ES_NEXT, MODULE));

module.exports = {
    setParserOptions,
    es5,
    es6Script,
    es6Module,
    esNextScript,
    esNextModule,
};
