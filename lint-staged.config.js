module.exports = {
  // This will lint and format TypeScript and
  '**/*.(ts|tsx)': filenames => [`pnpm run lint`, `pnpm run prettier`],

  // this will Format MarkDown and JSON
  '**/*.(md|json)': filenames => `pnpm run prettier --write ${filenames.join(' ')}`,
};
