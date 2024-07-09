import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import EventListing from './EventListing'

describe('With React Testing Library', () => {
	test('renders EventListing', () => {
		const event = {
			id: '601',
			title: "'Ligaw Na Tadhana'",
			location: 'Toronto, Canada',
			date: 'Mar 23 2023',
			imageUrl: 'ligaw-na-tadhana.png',
			content:
				"<p>UPPERCASE's latest single '<i>Ligaw Na Tadhana</i>' lyric video:</p>",
			externalUrl: 'https://youtu.be/Z3nZp2xkFCg?si=t0nPvaDqJWknNHLu'
		}
		render(<EventListing event={event} />)

		// assert page components
		expect(screen.getByTestId('event-item')).toBeDefined()
		expect(screen.getByTestId('event-title')).toBeDefined()
		expect(screen.getByTestId('event-date')).toBeDefined()
		expect(screen.getByTestId('event-location')).toBeDefined()
		expect(screen.getByTestId('event-content')).toBeDefined()
		expect(screen.getByTestId('event-url')).toBeDefined()
	})
})
