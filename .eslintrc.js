module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': 'eslint:recommended',
  'overrides': [
    {
      'env': {
        'node': true,
      },
      'files': [
        '.eslintrc.{js,cjs}',
      ],
      'parserOptions': {
        'sourceType': 'script',
      },
    },
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  plugins: [
    '@stylistic', 
  ],
  'rules': {
    'comma-dangle': ['error', 'always-multiline'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    '@stylistic/indent': ['error', 2], 
  },
}
