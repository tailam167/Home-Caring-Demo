import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import pluginJsxA11y from "eslint-plugin-jsx-a11y";

export default [
  // Base ESLint rules
  pluginJs.configs.recommended,

  // TypeScript-specific rules
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json", // Point to your tsconfig.json
        ecmaFeatures: { jsx: true },
      },
    },
  },

  // React-specific rules
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      react: pluginReact,
      "react-hooks": pluginReactHooks,
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
      // Add or override specific React rules here
      "react/react-in-jsx-scope": "off", // For React 17+ where React is not needed in scope
      "react/prop-types": "off", // If using TypeScript for prop types
    },
    settings: {
      react: {
        version: "detect", // Automatically detect React version
      },
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  // Ignore files/directories
  {
    ignores: ["dist/", "node_modules/"],
  },
];
