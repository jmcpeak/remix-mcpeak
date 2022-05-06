/**
 * @type {import('@types/eslint').Linter.BaseConfig}
 */
module.exports = {
  plugins: ["prettier", "react", "react-hooks", "testing-library"],
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "@remix-run/eslint-config/jest-testing-library",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:testing-library/react",
    "prettier",
  ],
  rules: {
    "react/react-in-jsx-scope": "off",
    "testing-library/prefer-screen-queries": "off",
    "testing-library/await-async-query": "off",
  },
  // we're using vitest which has a very similar API to jest
  // (so the linting plugins work nicely), but it we have to explicitly
  // set the jest version.
  settings: {
    jest: {
      version: 27,
    },
  },
};
