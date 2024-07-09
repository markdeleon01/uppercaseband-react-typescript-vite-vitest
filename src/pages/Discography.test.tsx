import { render, screen } from '@testing-library/react'
import { describe, test, expect } from 'vitest'
import Discography from './Discography'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('With React Testing Library', () => {
	const initialState = {
		discography: {
			releases: [
				{
					title: "'Time Space Warp'",
					releaseType: 'ALBUM',
					releaseDate: 'May 17 2013',
					imageUrl: 'timespacewarp_albumcover.png',
					spotifyUrl:
						'https://open.spotify.com/album/42XqkGCyqyjzf4kB0kFdvu?si=tn4ChbihRoy9PIfaSjPyYg'
				},
				{
					title: "'Ere'",
					releaseType: 'SINGLE',
					releaseDate: 'Dec 02 2014',
					imageUrl: 'ere_cover.png',
					spotifyUrl:
						'https://open.spotify.com/track/1QIwnzacd5KVjLsf3CZK2Y?si=25c450d9ed8f4623'
				},
				{
					title: "'Bukas Makalawa'",
					releaseType: 'EP',
					releaseDate: 'Mar 26 2017',
					imageUrl: 'bukas_makalawa.jpg',
					spotifyUrl:
						'https://open.spotify.com/album/4233FXws5N1g4lcllYxram?si=10Ka3-G2SxCWFJ6AjEdhag'
				},
				{
					title: "'Babalik'",
					releaseType: 'SINGLE',
					releaseDate: 'Dec 02 2017',
					imageUrl: 'ub_babalik_cover.jpg',
					spotifyUrl:
						'https://open.spotify.com/album/4fvgQ2m4ukSzEzHZATEMDc?si=zNMTPrCuTXS0fTCS_tbZrQ'
				},
				{
					title: "'Tanging Ikaw'",
					releaseType: 'SINGLE',
					releaseDate: 'Feb 09 2019',
					imageUrl: 'tanging-ikaw-cover-artwork.png',
					spotifyUrl:
						'https://open.spotify.com/album/4qkXXPQF8aiScuCMRuiqM1?si=iRCaY-2kQ9qZp740G-VodQ'
				},
				{
					title: "'Ligaw Na Tadhana'",
					releaseType: 'SINGLE',
					releaseDate: 'Mar 23 2023',
					imageUrl: 'UPPERCASE-LNT-single.png',
					spotifyUrl:
						'https://open.spotify.com/track/0yQ0RzKaaoiy1xepomQcC0?si=4963648232184926'
				}
			]
		}
	}

	const mockStore = configureStore()
	let store

	test('renders Discography', () => {
		store = mockStore(initialState)
		render(
			<Provider store={store}>
				<Discography />
			</Provider>
		)

		// assert main page header
		expect(screen.getByTestId('discography-header-1')).toBeDefined()

		// assert secondary page header
		expect(screen.getByTestId('discography-header-2')).toBeDefined()

		// assert page components
		expect(screen.getByTestId('discography')).toBeDefined()
		expect(screen.getAllByTestId('release-item')).toBeDefined()
		expect(screen.getAllByTestId('release-item')).toHaveLength(6)
		expect(screen.getAllByTestId('release-thumbnail')).toBeDefined()
		expect(screen.getAllByTestId('release-thumbnail')).toHaveLength(6)
		expect(screen.getAllByTestId('release-title')).toBeDefined()
		expect(screen.getAllByTestId('release-title')).toHaveLength(6)
		expect(screen.getAllByTestId('release-date')).toBeDefined()
		expect(screen.getAllByTestId('release-date')).toHaveLength(6)
		expect(screen.getAllByTestId('release-url')).toBeDefined()
		expect(screen.getAllByTestId('release-url')).toHaveLength(6)
	})
})
