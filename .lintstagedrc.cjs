module.exports = {
  '(apps/**/src)/**/*.{js,jsx,ts,tsx}': 'eslint "**/*.{js,jsx,ts,tsx}"',
  '*.{ts,tsx}': 'npm run format',
};
