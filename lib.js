const ES5 = 5;
const ES6 = 6;
const ESNEXT = 2017;
const strictRules = require('./conf/strict');

function makeParserOpts(version, type) {
    return {
        ecmaVersion: version,
        sourceType: type,
    };
}

function getType(version) {
    return version < ES6 ? 'script' : 'module';
}

function reco(version) {
    return {
        parserOptions: makeParserOpts(version, getType(version)),
        'extends': 'eslint:recommended',
    };
}

function strict(version) {
    const ob = reco(version);
    ob.rules = strictRules;
    return ob;
}

module.exports = {
    es5Recommended() { return reco(ES5); },
    es5Strict() { return strict(ES5); },
    es6Recommended() { return reco(ES6); },
    es6Strict() { return strict(ES6); },
    esnextRecommended() { return reco(ESNEXT); },
    esnextStrict() { return strict(ESNEXT); },
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
};
