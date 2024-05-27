import React from 'react'
import Events from '../../src/pages/Events'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('<Events />', () => {
	const initialState = {
		events: [
			{
				id: '101',
				title: 'Time Space Warp Album Launch',
				location: 'Hard Rock Café Toronto, Canada',
				date: 'May 17 2013',
				imageUrl: 'tsw-album-launch.png',
				content:
					"<p>UPPERCASE launched their debut full-length album '<i>Time Space Warp</i>' at Toronto's legendary Hard Rock Cafe.</p>",
				externalUrl:
					'https://www.youtube.com/watch?v=yNt0JV8or3k&list=PL0AgfLYM2K_sKTvDMqLY4sDr8Pi1zadB0'
			},
			{
				id: '102',
				title:
					'UPPERCASE wins top award in 2013 Filipinos Making Waves Festival',
				location: 'Toronto, Canada',
				date: 'Jun 03 2013',
				imageUrl: 'fmwf-2013.png',
				content:
					"<p>UPPERCASE bags the 'Top Band' award in Toronto's 2013 Filipinos Making Waves Festival, winning over judges with their hit single '<a href='https://www.youtube.com/watch?v=VcXZ34V-9SU' target='blank'>Ere</a>'.</p>",
				externalUrl:
					'http://www.filipinosmakingwaves.com/uploads/2/8/7/2/2872506/web_waves_june2013.pdf'
			},
			{
				id: '201',
				title: 'UPPERCASE live in Manila 2015',
				location: 'Manila, Philippines',
				date: 'May 01 2015',
				imageUrl: 'uppercase-manila-2015.png',
				content:
					'<p>UPPERCASE performed in various gigs around Manila, Philippines to promote their debut album.</p>',
				externalUrl: 'https://www.youtube.com/watch?v=NDxchZL_qCQ'
			},
			{
				id: '401',
				title: "'Babalik' - Christmas feature video",
				location: 'Dubai, UAE',
				date: 'Dec 19 2019',
				imageUrl: 'ub_babalik_cover.jpg',
				content:
					"<p>UPPERCASE's Christmas single '<i>Babalik</i>' gets featured on a special promotional video by TAG 91.1 radio station from Dubai, UAE dedicated to Overseas Filipino Workers (OFWs).</p>",
				externalUrl: 'https://fb.watch/2wBYilLHEB/'
			},
			{
				id: '501',
				title: "'Tanging Ikaw'",
				location: 'Toronto, Canada',
				date: 'Feb 9 2019',
				imageUrl: 'tanging-ikaw.png',
				content:
					"<p>UPPERCASE's latest single '<i>Tanging Ikaw</i>' enjoys heavy streaming on Spotify Philippines.</p>",
				externalUrl: 'https://www.youtube.com/watch?v=KWHDtXBoa2o'
			},
			{
				"id": "601",
				"title": "'Ligaw Na Tadhana'",
				"location": "Toronto, Canada",
				"date": "Mar 23 2023",
				"imageUrl": "ligaw-na-tadhana.png",
				"content": "<p>UPPERCASE's latest single '<i>Ligaw Na Tadhana</i>' lyric video:</p>",
				"externalUrl": "https://youtu.be/Z3nZp2xkFCg?si=t0nPvaDqJWknNHLu"
			}
		]
	}
	const mockStore = configureStore()
	let store

	it('renders', () => {
		store = mockStore(initialState)

		// see: https://on.cypress.io/mounting-react
		cy.mount(
			<Provider store={store}>
				<Events />
			</Provider>
		)
		cy.get('.events').should('exist')
		cy.get('.events').should('have.length', 1)
	})
})
