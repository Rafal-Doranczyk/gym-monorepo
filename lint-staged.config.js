module.exports = {
  // This will lint and format TypeScript files
  '**/*.(ts|tsx)': filenames => [`pnpm run lint`, `pnpm run format`]
};
