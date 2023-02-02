module.exports = {
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "prettier", "plugin:prettier/recommended"],
  plugins: ["prettier"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2020,
        sourceType: "module",
      },
      plugins: ["react", "prettier", "@typescript-eslint"],
      extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:prettier/recommended",
        "plugin:react-hooks/recommended",
      ],
      globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
      rules: {
        "no-useless-constructor": 0,
        camelcase: [2, { ignoreImports: true }],
        "global-require": 0,
        "spaced-comment": 0,
        "no-underscore-dangle": 0,
        "no-plusplus": 0,
        "no-continue": 0,
        "vars-on-top": 0,
        "no-unused-vars": 0,
        "func-names": 2,
        "no-console": [2, { allow: ["warn", "error"] }],
        "no-param-reassign": [
          2,
          {
            props: true,
            ignorePropertyModificationsForRegex: [".*"],
          },
        ],
        "no-restricted-syntax": [
          2,
          {
            selector: "LabeledStatement",
            message:
              "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
          },
          {
            selector: "WithStatement",
            message:
              "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
          },
        ],
        "no-use-before-define": 0,
        "no-shadow": 0,
        "import/prefer-default-export": 0,
        "import/no-unresolved": 0,
        "import/no-extraneous-dependencies": 0,
        "import/no-named-as-default": 0,
        "import/no-named-as-default-member": 0,
        "import/namespace": 0,
        "import/extensions": 0,
        "import/named": 0,
        "import/order": 0,
        "import/newline-after-import": 1,
        "import/no-useless-path-segments": 2,
        "prettier/prettier": [
          "error",
          {
            endOfLine: "auto",
          },
        ],
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": 0,
        "react/prop-types": 0,
        "react/button-has-type": 0,
        "react/jsx-one-expression-per-line": 0,
        "react/jsx-curly-spacing": 0,
        "react/no-access-state-in-setstate": 0,
        "react/destructuring-assignment": 0,
        "react/jsx-no-bind": 0,
        "react/require-default-props": 0,
        "react/display-name": 0,
        "react/jsx-first-prop-new-line": 0,
        "react/jsx-props-no-spreading": 0,
        "react/static-property-placement": 0,
        "react/state-in-constructor": 0,
        "react/no-array-index-key": 1,
        "react/no-danger": 2,
        "react/jsx-tag-spacing": [
          2,
          {
            beforeSelfClosing: "always",
          },
        ],
        "react/jsx-closing-bracket-location": [
          2,
          {
            selfClosing: "tag-aligned",
            nonEmpty: "tag-aligned",
          },
        ],
        "react/jsx-wrap-multilines": [
          2,
          {
            declaration: "parens-new-line",
            assignment: "parens-new-line",
            return: "parens-new-line",
            arrow: "ignore",
            condition: "ignore",
            logical: "ignore",
            prop: "ignore",
          },
        ],
        "react/function-component-definition": [
          2,
          {
            namedComponents: "arrow-function",
            unnamedComponents: "arrow-function",
          },
        ],
        "@typescript-eslint/no-shadow": 2,
        "@typescript-eslint/no-non-null-assertion": 0,
        "@typescript-eslint/no-use-before-define": 2,
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/no-empty-interface": 0,
        "@typescript-eslint/explicit-function-return-type": 2,
        "@typescript-eslint/no-unused-vars": [
          2,
          {
            varsIgnorePattern: "_+",
            argsIgnorePattern: "_+",
          },
        ],
      },
    },
  ],
};
