import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginTS from "@typescript-eslint/eslint-plugin";
import pluginReactNative from "eslint-plugin-react-native";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // JS / JSX files
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },

  // TypeScript / TSX files
  {
    files: ["**/*.{ts,tsx}"],
    plugins: { "@typescript-eslint": pluginTS },
    extends: ["plugin:@typescript-eslint/recommended"],
  },

  // React rules (web + mobile)
  pluginReact.configs.flat.recommended,

  // React Native rules
  pluginReactNative.configs.recommended,

  // Ignore common build folders
  {
    ignores: ["node_modules/**", "app/.next/**", "mobile/.expo/**", "dist/**"],
  },
]);