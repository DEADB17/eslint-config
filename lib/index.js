const ES5 = 5;
const ES6 = 6;
const ESNEXT = 2017;
const RECO = 'eslint:recommended';
const STRICT = require('../conf/strict');

function makeParserOpts(version) {
    return {
        ecmaVersion: version,
        sourceType: version < ES6 ? 'script' : 'module',
    };
}

module.exports = {
    es5() { return {parserOptions: makeParserOpts(ES5), 'extends': RECO}; },
    es6() { return {parserOptions: makeParserOpts(ES6), 'extends': RECO}; },
    esnext() { return {parserOptions: makeParserOpts(ESNEXT), 'extends': RECO}; },
    strict() { return {'extends': RECO, rules: STRICT}; },
    node() {
        return {
            env: {node: true},
            plugins: ['node'],
            'extends': 'plugin:node/recommended',
        };
    },
    import() {
        return {
            plugins: ['import'],
            'extends': 'plugin:import/recommended',
        };
    },
    es6StrictImport() {
        return {
            parserOptions: makeParserOpts(ES6),
            plugins: ['import'],
            'extends': [RECO, 'plugin:import/recommended'],
            rules: STRICT,
        };
    }
};
