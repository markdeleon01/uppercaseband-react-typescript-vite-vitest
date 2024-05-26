import { render, screen } from '@testing-library/react'
import Home from './Home'

describe('With React Testing Library', () => {
	test('renders Home', () => {
		render(<Home />)

		// assert main page header
		expect(screen.getByTestId('home-header-1')).toBeDefined()

		// assert secondary page header
		expect(screen.getByTestId('home-header-2')).toBeDefined()

		// assert page components
		expect(screen.getByTestId('home')).toBeDefined()
		expect(screen.getByTestId('band-logo')).toBeDefined()
		expect(screen.getByTestId('page-content')).toBeDefined()
	})
})
