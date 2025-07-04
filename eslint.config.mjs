import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier", "plugin:@tanstack/query/recommended"],
    rules: {
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      "semi": ["error"],
      "quotes": ["error", "double"],
      "@tanstack/query/exhaustive-deps": ["error"]
    }
  }),
];

export default eslintConfig;
