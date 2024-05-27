import { defineConfig } from 'cypress'

export default defineConfig({
	env: {
		codeCoverage: {
			include: 'cypress/**/*.*'
		}
	},
	e2e: {
		baseUrl: 'http://localhost:5173'
	},
	component: {
		devServer: {
			framework: 'react',
			bundler: 'vite'
		}
	}
})
