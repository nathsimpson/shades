module.exports = {
  extends: ['standard', 'standard-react', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    'react/no-unused-prop-types': 0,
    'standard/computed-property-even-spacing': 0,
    'no-template-curly-in-string': 0,
    camelcase: 0,
    'import/no-duplicates': 0,
    'react/jsx-no-target-blank': 0
  },
  env: {
    browser: true
  },
  overrides: [
    {
      files: ['*.test.js', '**/__tests__/**'],
      env: {
        jest: true
      }
    }
  ]
};
