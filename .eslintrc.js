// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  /* OLD */
  // extends: ["custom"],
  // root: true,
  // settings: {
  //   next: {
  //     rootDir: ["apps/*/"],
  //   },
  // },

  /* NEW */
  ignorePatterns: ["apps/**", "packages/**"],
  extends: ["@repo/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};