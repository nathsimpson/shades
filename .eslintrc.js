module.exports = {
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  plugins: ['react', '@emotion', 'prettier'],
  parser: 'babel-eslint',
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '_'
      }
    ]
  },
  env: {
    browser: true,
    es6: true,
    node: true
  },
  overrides: [
    {
      files: ['*.test.js', '**/__tests__/**'],
      env: {
        jest: true
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
