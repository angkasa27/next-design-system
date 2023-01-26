module.exports = {
  extends: [
    "eslint:recommended",
    "next",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "prettier",
  ],
  rules: {
    "import/no-unresolved": 0,
    "react/jsx-sort-default-props": [2, { ignoreCase: true }],
    "react/jsx-sort-props": [2, { ignoreCase: true }],
    "react/react-in-jsx-scope": 0,
    "react/sort-comp": 2,
    "react/sort-prop-types": [2, { ignoreCase: true }],
    "sort-keys": [2, "asc", { caseSensitive: false, natural: false }],
  },
  settings: {
    next: {
      rootDir: "packages/my-app/",
    },
    react: {
      version: "detect",
    },
  },
};
