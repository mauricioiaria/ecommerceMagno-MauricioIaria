module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'linebreak-style': 'off',
    indent: 'off',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/label-has-associated-control': 'off',
    'no-unused-expressions': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    'react/jsx-no-constructed-context-value': 'off',
    'no-sequences': 'off',
    'import/order': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'no-shadow': 'off',
    'react/button-has-type': 'off',
    'import/prefer-default-export': 'off',
    'max-len': 'off',

  },
};
