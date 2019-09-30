/* Prettier configuration file
 * Explanation: https://prettier.io/docs/en/configuration.html
 * Options: https://prettier.io/docs/en/options.html
 */

const NUMBER_OF_CHARACTERS_EIRIK_FINDS_COMFORTABLE_WHEN_SKIMMING = 100;
const STYLE_WIDTH = 100;

module.exports = {
  printWidth: 160,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.{js,jsx}',
      options: { parser: 'flow' },
    },
    {
      files: '*.md',
      options: { proseWrap: 'always', printWidth: NUMBER_OF_CHARACTERS_EIRIK_FINDS_COMFORTABLE_WHEN_SKIMMING },
    },
    {
      files: 'resources/release-notes.md',
      options: {
        /* This file is displayed in a dialog box in Electron. The dialog box conserves line breaks. We therefore do not want the editor to add line breaks.
         * https://bitbucket.org/enturas/ess-client/pull-requests/273/innf-re-google-java-format-og-forbedre/diff#comment-84174205 */
        proseWrap: 'never',
      },
    },
    {
      files: '*.{css,less,overrides,variables}',
      options: {
        parser: 'css',
        printWidth: STYLE_WIDTH,
      },
    },
    {
      files: '*.{xml,xsd}',
      options: { parser: 'html' },
    },
    {
      files: '*.svelte',
      options: { parser: 'svelte', svelteStrictMode: true, printWidth: 120 },
    },
  ],
};
