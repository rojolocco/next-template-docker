import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      "next/core-web-vitals",
      "next/typescript",
      "prettier",
      "plugin:@tanstack/query/recommended",
    ],
<<<<<<< HEAD
<<<<<<< HEAD
=======
    plugins: {},
>>>>>>> ec0ecf8 (format changes)
=======
>>>>>>> 7a0cc50 (lint errors fixed)
    rules: {
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      semi: ["error"],
      quotes: ["error", "double"],
      "@tanstack/query/exhaustive-deps": ["error"],
    },
  }),
];

export default eslintConfig;
