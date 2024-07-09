import { screen, render } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App tests', () => {
	it('should render the App', () => {
		render(<App />)

		const appDivElement = screen.getByTestId('app')
		expect(appDivElement).toBeDefined()
	})
})
