import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from './NavBar'

describe('NavBar', () => {
    test('should render', () => {
        render(<NavBar />, { wrapper: MemoryRouter })

        // assert navigation links
        expect(screen.getByTestId('home-link')).toBeDefined()
        expect(screen.getByTestId('about-link')).toBeDefined()
        expect(screen.getByTestId('discography-link')).toBeDefined()
        expect(screen.getByTestId('events-link')).toBeDefined()
    })
})