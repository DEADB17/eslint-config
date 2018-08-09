/**
 * @fileoverview Configuration applied when a user configuration extends from
 * eslint:recommended.
 * @author DEADB17
 */

"use strict";

/* eslint sort-keys: ["error", "asc"], quote-props: ["error", "consistent"] */
/* eslint-disable sort-keys */

module.exports = Object.freeze({

    /* eslint-enable sort-keys */
    "accessor-pairs": "error",
    "array-bracket-newline": ["error", { "multiline": true }],
    "array-bracket-spacing": "off",
    "array-callback-return": "off",
    "array-element-newline": "off",
    "arrow-body-style": ["warn", "as-needed"],
    "arrow-parens": ["warn", "as-needed"],
    "arrow-spacing": "warn",
    "block-scoped-var": "error",
    "block-spacing": ["warn", "always"],
    "brace-style": ["warn", "1tbs", { "allowSingleLine": true }],
    "callback-return": ["error", ["callback", "cb", "next", "done"]],
    "camelcase": "warn",
    "capitalized-comments": "off",
    "class-methods-use-this": "warn",
    "comma-dangle": ["warn", "only-multiline"],
    "comma-spacing": "warn",
    "comma-style": "warn",
    "complexity": "warn",
    "computed-property-spacing": ["warn", "never"],
    "consistent-return": "error",
    "consistent-this": ["off", "that"],
    "constructor-super": "error",
    "curly": ["error", "multi-line"],
    "default-case": "error",
    "dot-location": ["warn", "property"],
    "dot-notation": ["error", { "allowKeywords": true }],
    "eol-last": "error",
    "eqeqeq": ["error", "smart"],
    "for-direction": "off",
    "func-call-spacing": "warn",
    "func-name-matching": "off",
    "func-names": ["warn", "as-needed"],
    "func-style": ["off", "declaration"],
    "generator-star-spacing": "off",
    "getter-return": "off",
    "global-require": "error",
    "guard-for-in": "error",
    "handle-callback-err": ["error", "^.*(e|E)rr" ],
    "id-blacklist": "off",
    "id-length": "off",
    "id-match": "off",
    "indent": "off",
    "indent-legacy": ["warn", 4],
    "init-declarations": "off",
    "jsx-quotes": "off",
    "key-spacing": ["warn", { "afterColon": true, "beforeColon": false }],
    "keyword-spacing": "error",
    "line-comment-position": "off",
    "linebreak-style": ["warn", "unix"],
    "lines-around-comment": "off",
    "lines-around-directive": "off",
    "max-depth": ["warn", 4],
    "max-len": ["warn", {"code": 120, "ignoreUrls": true, "tabWidth": 4 }],
    "max-lines": ["warn", {"max": 240, "skipBlankLines": true, "skipComments": true }],
    "max-nested-callbacks": ["off", 2],
    "max-params": ["warn", 7],
    "max-statements": ["off", 10],
    "max-statements-per-line": "off",
    "multiline-ternary": "off",
    "new-cap": "warn",
    "new-parens": "error",
    "newline-after-var": "off",
    "newline-before-return": "off",
    "newline-per-chained-call": "off",
    "no-alert": "error",
    "no-array-constructor": "error",
    "no-await-in-loop": "off",
    "no-bitwise": ["error", { "int32Hint": true }],
    "no-buffer-constructor": "error",
    "no-caller": "error",
    "no-case-declarations": "error",
    "no-catch-shadow": "error",
    "no-class-assign": "error",
    "no-compare-neg-zero": "error",
    "no-cond-assign": "error",
    "no-confusing-arrow": "error",
    "no-console": "error",
    "no-const-assign": "error",
    "no-constant-condition": "error",
    "no-continue": "error",
    "no-control-regex": "error",
    "no-debugger": "error",
    "no-delete-var": "error",
    "no-div-regex": "error",
    "no-dupe-args": "error",
    "no-dupe-class-members": "error",
    "no-dupe-keys": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "off",
    "no-else-return": "warn",
    "no-empty": "error",
    "no-empty-character-class": "error",
    "no-empty-function": "error",
    "no-empty-pattern": "error",
    "no-eq-null": "error",
    "no-eval": "error",
    "no-ex-assign": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-boolean-cast": "error",
    "no-extra-label": "warn",
    "no-extra-parens": ["warn", "all", { "ignoreJSX": "multi-line", "nestedBinaryExpressions": false }],
    "no-extra-semi": "error",
    "no-fallthrough": "error",
    "no-floating-decimal": "error",
    "no-func-assign": "error",
    "no-global-assign": "error",
    "no-implicit-coercion": "error",
    "no-implicit-globals": "error",
    "no-implied-eval": "error",
    "no-inline-comments": "off",
    "no-inner-declarations": ["error", "both"],
    "no-invalid-regexp": "error",
    "no-invalid-this": "error",
    "no-irregular-whitespace": "error",
    "no-iterator": "error",
    "no-label-var": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-lonely-if": "error",
    "no-loop-func": "error",
    "no-magic-numbers": ["error", { "enforceConst": true, "ignore": [0, 1] }],
    "no-mixed-operators": "error",
    "no-mixed-requires": ["warn", true],
    "no-mixed-spaces-and-tabs": ["error", "smart-tabs"],
    "no-multi-assign": "off",
    "no-multi-spaces": "warn",
    "no-multi-str": "error",
    "no-multiple-empty-lines": ["warn", {"max": 3}],
    "no-native-reassign": "off",
    "no-negated-condition": "error",
    "no-negated-in-lhs": "off",
    "no-nested-ternary": "warn",
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-require": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-obj-calls": "error",
    "no-octal": "error",
    "no-octal-escape": "error",
    "no-param-reassign": "error",
    "no-path-concat": "error",
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],
    "no-process-env": "off",
    "no-process-exit": "error",
    "no-proto": "error",
    "no-prototype-builtins": "error",
    "no-redeclare": "error",
    "no-regex-spaces": "error",
    "no-restricted-globals": "off",
    "no-restricted-imports": "off",
    "no-restricted-modules": "off",
    "no-restricted-properties": "off",
    "no-restricted-syntax": "off",
    "no-return-assign": "error",
    "no-return-await": "off",
    "no-script-url": "error",
    "no-self-assign": "error",
    "no-self-compare": "error",
    "no-sequences": "error",
    "no-shadow": "warn",
    "no-shadow-restricted-names": "error",
    "no-spaced-func": "error",
    "no-sparse-arrays": "error",
    "no-sync": "warn",
    "no-tabs": "off",
    "no-template-curly-in-string": "off",
    "no-ternary": "off",
    "no-this-before-super": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "warn",
    "no-undef": "error",
    "no-undef-init": "error",
    "no-undefined": "off",
    "no-underscore-dangle": "off",
    "no-unexpected-multiline": "error",
    "no-unmodified-loop-condition": "error",
    "no-unneeded-ternary": "warn",
    "no-unreachable": "error",
    "no-unsafe-finally": "error",
    "no-unsafe-negation": "error",
    "no-unused-expressions": "error",
    "no-unused-labels": "error",
    "no-unused-vars": ["error", { "args": "after-used", "vars": "all" }],
    "no-use-before-define": "error",
    "no-useless-call": "error",
    "no-useless-computed-key": "error",
    "no-useless-concat": "warn",
    "no-useless-constructor": "warn",
    "no-useless-escape": "warn",
    "no-useless-rename": "warn",
    "no-useless-return": "warn",
    "no-var": "error",
    "no-void": "warn",
    "no-warning-comments": ["warn", { "location": "start", "terms": ["todo", "fixme", "xxx"] }],
    "no-whitespace-before-property": "error",
    "no-with": "error",
    "nonblock-statement-body-position": "off",
    "object-curly-newline": "off",
    "object-curly-spacing": "off",
    "object-property-newline": "off",
    "object-shorthand": ["warn", "consistent-as-needed"],
    "one-var": "off",
    "one-var-declaration-per-line": "off",
    "operator-assignment": ["off", "always"],
    "operator-linebreak": "off",
    "padded-blocks": "off",
    "padding-line-between-statements": "off",
    "prefer-arrow-callback": "off",
    "prefer-const": "warn",
    "prefer-destructuring": "off",
    "prefer-numeric-literals": "warn",
    "prefer-promise-reject-errors": "error",
    "prefer-reflect": "off",
    "prefer-rest-params": "warn",
    "prefer-spread": "warn",
    "prefer-template": "warn",
    "quote-props": ["error", "as-needed", { "keywords": true }],
    "quotes": ["warn", "single"],
    "radix": "error",
    "require-await": "off",
    "require-jsdoc": "off",
    "require-yield": "error",
    "rest-spread-spacing": "off",
    "semi": ["error", "always"],
    "semi-spacing": ["error", { "after": true, "before": false }],
    "semi-style": "off",
    "sort-imports": "off",
    "sort-keys": "off",
    "sort-vars": "off",
    "space-before-blocks": ["warn", "always"],
    "space-before-function-paren": ["warn", { "anonymous": "always", "named": "never" }],
    "space-in-parens": ["warn", "never"],
    "space-infix-ops": "error",
    "space-unary-ops": ["error", { "nonwords": false, "words": true }],
    "spaced-comment": "off",
    "strict": "error",
    "switch-colon-spacing": ["warn", { "after": true, "before": false }],
    "symbol-description": "error",
    "template-curly-spacing": "off",
    "template-tag-spacing": "off",
    "unicode-bom": "off",
    "use-isnan": "error",
    "valid-jsdoc": "warn",
    "valid-typeof": "error",
    "vars-on-top": "error",
    "wrap-iife": ["error", "any"],
    "wrap-regex": "off",
    "yield-star-spacing": "off",
    "yoda": "off"
});
