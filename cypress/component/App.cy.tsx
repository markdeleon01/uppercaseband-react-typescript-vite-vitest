import React from 'react'
import App from '../../src/App'

describe('<App />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<App />)
		cy.get('.app').should('exist')
		cy.get('.app').should('have.length', 1)
	})
})
