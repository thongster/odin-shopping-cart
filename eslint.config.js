import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],
    ignores: ["dist/**"],

    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      prettier,
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      // Base JS rules
      ...js.configs.recommended.rules,

      // React (flat-config safe)
      ...react.configs.flat.recommended.rules,

      // Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React 17+ / Vite
      "react/react-in-jsx-scope": "off",

      // Prettier integration
      "prettier/prettier": "error",

      // Optional but common
      "react/prop-types": "off",
    },
  },

  // Disable ESLint rules that conflict with Prettier
  eslintConfigPrettier,
]);
