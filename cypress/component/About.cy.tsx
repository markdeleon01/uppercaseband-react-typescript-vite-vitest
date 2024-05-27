import React from 'react'
import About from '../../src/pages/About'

import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'

describe('<About />', () => {
	const initialState = {
		members: [
			{
				name: 'Mark de Leon',
				role: 'vocals, guitars',
				'image-url': 'mark-deleon.png'
			},
			{
				name: 'Allan Lagat',
				role: 'bass',
				'image-url': 'allan-lagat.png'
			},
			{
				name: 'Joey Giagonia',
				role: 'lead guitars',
				'image-url': 'joey-giagonia.png'
			},
			{
				name: 'Kyle Saliva',
				role: 'drums',
				'image-url': 'kyle-saliva.png'
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
				<About />
			</Provider>
		)
		cy.get('.about').should('exist')
		cy.get('.about').should('have.length', 1)
		cy.get('.about > .band-pic').should('exist')
		cy.get('.about > .band-pic').should('have.length', 1)
		cy.get('.about > .biography').should('exist')
		cy.get('.about > .biography').should('have.length', 1)
	})
})
