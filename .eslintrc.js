module.exports = {
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    extends: ["plugin:@angular-eslint/recommended"],
    rules: {
        // ORIGINAL tslint.json -> "directive-selector": [true, "attribute", "app", "camelCase"],
        "@angular-eslint/directive-selector": [
            "error",
            { type: "attribute", prefix: "vdst", style: "camelCase" },
        ],
        // ORIGINAL tslint.json -> "component-selector": [true, "element", "app", "kebab-case"],
        "@angular-eslint/component-selector": [
            "error",
            { type: "element", prefix: "vdst", style: "kebab-case" },
        ],
    },
    overrides: [
        /**
        * This extra piece of configuration is only necessary if you make use of inline
        * templates within Component metadata, e.g.:
        */
        {
            files: ["*.component.ts"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
            },
            plugins: ["@angular-eslint/template"],
            processor: "@angular-eslint/template/extract-inline-html",
        },
        // Custom rules for TypeScript
        {
            files: ["*.ts"],
            extends: ["prettier/@typescript-eslint", "plugin:prettier/recommended"],
            parser: "@typescript-eslint/parser",
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
            },
            rules: {
                "import/no-unresolved": "off",
                "import/prefer-default-export": "off",
                "class-methods-use-this": "off",
                "lines-between-class-members": "off",
                "@typescript-eslint/unbound-method": "off",
            },
        },
        // Configuration for unit and e2e spec files
        {
            files: ["*.spec.ts"],
            rules: {
                "@typescript-eslint/no-unused-vars": "off",
            },
        },
        {
            files: ["src/**/*.spec.ts", "src/**/*.d.ts"],
            parserOptions: {
            project: "./tsconfig.spec.json",
            },
            extends: ["plugin:jasmine/recommended"],
            plugins: ["jasmine"],
            env: { jasmine: true },
        },
    ],
};