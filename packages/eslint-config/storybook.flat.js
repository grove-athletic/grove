const js = require("@eslint/js");
const { FlatCompat } = require("@eslint/eslintrc");
const path = require("node:path");

// legacy config exported at ./storybook.js
const legacy = require(path.resolve(__dirname, "./storybook.js"));

const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

module.exports = compat.config(legacy);
