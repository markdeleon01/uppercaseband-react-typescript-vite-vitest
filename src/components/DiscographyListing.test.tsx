import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import DiscographyListing from './DiscographyListing'

describe('With React Testing Library', () => {
	test('renders DiscographyListing', () => {
		const release = {
			title: "'Ligaw Na Tadhana'",
			releaseType: 'SINGLE',
			releaseDate: 'Mar 23 2023',
			imageUrl: 'UPPERCASE-LNT-single.png',
			spotifyUrl:
				'https://open.spotify.com/track/0yQ0RzKaaoiy1xepomQcC0?si=4963648232184926'
		}
		render(<DiscographyListing release={release} />)

		// assert page components
		expect(screen.getByTestId('release-item')).toBeDefined()
		expect(screen.getByTestId('release-thumbnail')).toBeDefined()
		expect(screen.getByTestId('release-title')).toBeDefined()
		expect(screen.getByTestId('release-date')).toBeDefined()
		expect(screen.getByTestId('release-url')).toBeDefined()
	})
})
