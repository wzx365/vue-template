module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: ['plugin:vue/essential', '@vue/standard'],
  rules: {
    // 规则 0 : 关闭 1 : 警告 2 : 报错
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "eol-last": "off",
    "prefer-promise-reject-errors": ["error", { "allowEmptyReject": true }],
    "import/no-named-as-default": "error",
    "import/no-named-default": "error",
    // indent: [
    //   'error',
    //   2,
    //   {
    //     SwitchCase: 1,
    //     VariableDeclarator: 1,
    //     outerIIFEBody: 1,
    //     MemberExpression: 1,
    //     FunctionDeclaration: { parameters: 1, body: 1 },
    //     FunctionExpression: { parameters: 1, body: 1 },
    //     CallExpression: { arguments: 1 },
    //     ArrayExpression: 1,
    //     ObjectExpression: 1,
    //     ImportDeclaration: 1,
    //     flatTernaryExpressions: false,
    //     ignoreComments: false
    //   }
    // ],
    'vue/no-parsing-error': [
      2,
      {
        'x-invalid-end-tag': false
      }
    ],
    'vue/no-unused-components': 'off', // 关闭vue组件注册后,使用的时候换了一种写法而报错
    //'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'no-unused-vars': [
      1,
      {
        // 禁止声明变量后却不使用
        // 允许声明未使用变量
        vars: 'all',
        // 参数不检查
        args: 'none'
      }
    ],
    // 'no-duplicate-imports': 2,
    // 单引号
    // "avoidEscape": true 允许字符串使用单引号或双引号，只要字符串包含必须以其他方式转义的引号
    // "allowTemplateLiterals": true 允许字符串使用反引号
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: true }
    ],
    'no-duplicate-imports': 2, //禁止重复导入模块
    'no-var': 2, //禁用var，用let和const代替
    'no-eq-null': 2, //禁止对null使用==或!=运算符
    // 'no-sequences': 0, //禁用逗号操作符
    // "semi": ["error", "never"], // 行尾不加分号
    // 'no-inner-declarations': 1,
    // anonymous是用于匿名函数表达式（例如function() {}）。
    // named是用于命名函数表达式（例如function foo() {}）。
    // asyncArrow是用于异步箭头函数表达式（例如async () => {}）。
    // 'space-before-function-paren': [
    //   'error',
    //   {
    //     anonymous: 'always',
    //     named: 'always',
    //     asyncArrow: 'always'
    //   }
    // ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
