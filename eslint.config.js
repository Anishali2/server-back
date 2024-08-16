import pluginJs from "@eslint/js";
import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import nodeLint from "eslint-plugin-n";
import eslintPluginPrettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tseslint from "typescript-eslint";
export default [
  pluginJs.configs.recommended,
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      import: nodeLint.configs.recommended,
      "simple-import-sort": simpleImportSort,
      prettier: eslintPluginPrettier,
    },
    rules: {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",
      "@typescript-eslint/no-explicit-any": "off",
      ...eslintPluginPrettier.configs.rules,
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "prettier/prettier": [
        "error",
        {
          singleQoute: true,
          semi: true,
          tabWidth: 2,
          endOfLine: "auto",
        },
      ],
    },
    ignores: ["dist/**/*", "husky/**/*"],
  },
];
