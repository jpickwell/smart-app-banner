module.exports = {
  extends: 'eslint:recommended',
  env: {
    browser: true,
    node: true
  },
  rules: {
    indent: [
      2,
      2,
      {
        outerIIFEBody: 1,
        SwitchCase: 1,
        VariableDeclarator: {
          const: 3,
          let: 2,
          var: 2
        }
      }
    ],
    'linebreak-style': [2, 'unix'],
    'no-undef': 2,
    quotes: [
      2,
      'single',
      {
        avoidEscape: true
      }
    ],
    semi: [2, 'always']
  }
};
