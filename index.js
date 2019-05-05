const ECMA_VERSION = 8;
const INDENTATION_SPACES = 2;
const INDENTATION_SWITCH_CASES = 1;
const MAX_LINES = 400;
const MAX_STATEMENTS = 25;
const MAX_PARAMS = 4;

module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true
  },
  plugins: [
    'node',
    'security',
    'import'
  ],
  extends: [
    'airbnb-base',
    'plugin:node/recommended',
    'plugin:security/recommended'
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: ECMA_VERSION
  },
  rules: {
    'node/no-unpublished-require': 'off',
    'import/no-extraneous-dependencies': 'off',
    'object-shorthand': 'off',
    'block-scoped-var': 'off',
    'padded-blocks': 'off',
    'no-underscore-dangle': 'off',
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', INDENTATION_SPACES, {
      SwitchCase: INDENTATION_SWITCH_CASES,
      MemberExpression: 'off'
    }],
    'comma-dangle': ['error', 'never'],
    'linebreak-style': ['error', 'unix'],
    'no-debugger': 'error',
    'arrow-body-style': ['off', 'as-needed', {
      requireReturnForObjectLiteral: true
    }],
    'func-names': ['warn', 'always'],
    'no-console': 'warn',
    'no-alert': 'warn',
    'no-shadow': 'warn',
    'max-lines': ['warn', MAX_LINES],
    'max-statements': ['warn', MAX_STATEMENTS],
    'max-params': ['warn', MAX_PARAMS],
    'no-invalid-this': 'warn',
    camelcase: 'warn',
    'func-name-matching': ['warn', 'always'],
    curly: ['warn', 'all'],
    'no-warning-comments': ['warn', {
      terms: ['todo', 'fixme', 'fix me'],
      location: 'anywhere'
    }],
    'valid-jsdoc': ['warn', {
      prefer: {
        arg: 'param',
        argument: 'param',
        constructor: 'class',
        return: 'returns'
      },
      preferType: {
        Boolean: 'boolean',
        Number: 'number',
        String: 'string',
        Function: 'function',
        Promise: 'promise',
        Array: 'array'
      },
      requireReturn: false,
      requireReturnType: true,
      matchDescription: '.+',
      requireParamDescription: true,
      requireReturnDescription: true
    }],
    'require-jsdoc': ['warn', {
      require: {
        FunctionDeclaration: true,
        MethodDefinition: true,
        ClassDeclaration: true,
        ArrowFunctionExpression: true,
        FunctionExpression: true
      }
    }]
  }
};
