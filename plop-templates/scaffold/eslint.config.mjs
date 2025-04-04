import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

const languageOptions = {
	cjs: {
		sourceType: "commonjs",
		ecmaVersion: "latest",
	},
	esm: {
		sourceType: "module",
		ecmaVersion: "latest",
	},
	tsTsx: {
		parserOptions: {
			projectService: true,
			tsconfigRootDir: import.meta.dirname,
		},
	},
};

export default tsEslint.config(
	{ ignores: ["node_modules", "dist"] },
	eslint.configs.recommended,
	stylistic.configs.customize({ quotes: "double", indent: "tab", semi: true, commaDangle: "always-multiline" }),
	{ files: ["**/*.mjs"], languageOptions: languageOptions.esm },
	{ files: ["**/*.cjs", "**/*.js"], languageOptions: languageOptions.cjs },
	{
		files: ["**/*.ts", "**/*.tsx"],
		extends: [tsEslint.configs.recommendedTypeChecked, tsEslint.configs.eslintRecommended],
		languageOptions: languageOptions.tsTsx,
	},
);
