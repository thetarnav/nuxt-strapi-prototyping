module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
	},
	extends: [
		'@nuxtjs/eslint-config-typescript',
		'prettier',
		'prettier/vue',
		'plugin:prettier/recommended',
		'plugin:nuxt/recommended',
	],
	plugins: ['prettier'],
	// add your custom rules here
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-tabs': 0,
		'no-trailing-spaces': 'off',
		'lines-between-class-members': 'off',
		'consistent-return': 'off',
		'no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-vars': 'warn',
		camelcase: 'warn',
		'operator-linebreak': 'off',
		'eol-last': 'off',
		'no-use-before-define': 'off',
		'arrow-parens': 'off',
		'no-param-reassign': 'off',
		'one-var': 'off',
		'no-return-assign': 'off',
		'prefer-const': 'warn',
		eqeqeq: 'warn',
		curly: 'off',
		'nonblock-statement-body-position': 'off',
		'implicit-arrow-linebreak': 'off',
		'no-plusplus': 'off',
		'no-var': 'warn',
		'vars-on-top': 'warn',
		'one-var-declaration-per-line': 'warn',
		'arrow-body-style': 'warn',
		'no-confusing-arrow': 'off',
		'prefer-destructuring': 'warn',
		'no-restricted-globals': 'off',
		'no-else-return': 'warn',
		'guard-for-in': 'off',
		'comma-dangle': 'off',
		'no-extra-semi': 'off',
		'no-empty': 'warn',
		'global-require': 'warn',
		'object-curly-spacing': ['warn', 'always'],
		'prefer-promise-reject-errors': 'warn',
		'no-unused-expressions': 'off',
		'function-paren-newline': 'off',
		'no-await-in-loop': 'warn',
		'no-mixed-spaces-and-tabs': 'warn',
		'class-methods-use-this': 'off',
		'object-curly-newline': 'off',
		indent: ['off', 'tab'],
		'linebreak-style': 'off',
		quotes: ['warn', 'single'],
		semi: ['warn', 'never'],
		'no-new': 'off',
		'no-underscore-dangle': 'off',
		'no-useless-return': 'warn',
		'space-before-function-paren': 'off',
		'max-len': 'off',
		'no-undef': 'error',
		'prefer-arrow-callback': 'warn',
		'prefer-template': 'warn',
		'spaced-comment': 'warn',
		'vue/no-unused-components': 'warn',
		'vue/no-unused-vars': 'warn',
		'vue/no-side-effects-in-computed-properties': 'warn',
		'no-unreachable': 'warn',
		'prettier/prettier': 'off',
		'no-useless-escape': 'warn',
		'import/newline-after-import': 'warn',
		'object-shorthand': 'warn',
		'no-multiple-empty-lines': 'off',
		'padded-blocks': 'warn',
		'no-mixed-operators': 'off',
		'@typescript-eslint/member-delimiter-style': 'off',
		// '@typescript-eslint/camelcase': 'warn',
		'no-void': 'warn',
		'no-restricted-syntax': 'warn',
		'no-continue': 'warn',
		'space-before-blocks': 'off',
		'comma-spacing': 'warn',
		'space-infix-ops': 'warn',
		'no-multi-assign': 'off',
		'no-inner-declarations': 'warn',
		'@typescript-eslint/no-use-before-define': 'off',
		radix: 'off',
		'semi-style': 'warn',
		'semi-spacing': 'warn',
		'block-spacing': 'warn',
		'brace-style': 'warn',
		'keyword-spacing': 'warn',
		'no-loop-func': 'warn',
		'key-spacing': 'warn',
		'no-floating-decimal': 'warn',
	},
}
