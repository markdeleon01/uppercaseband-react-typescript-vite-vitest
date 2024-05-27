import React from 'react'
import Home from '../../src/pages/Home'

describe('<Home />', () => {
	it('renders', () => {
		// see: https://on.cypress.io/mounting-react
		cy.mount(<Home />)
		cy.get('.home').should('exist')
		cy.get('.home').should('have.length', 1)
		cy.get('.home > .band-logo').should('exist')
		cy.get('.home > .band-logo').should('have.length', 1)
		cy.get('.home > .page-content').should('exist')
		cy.get('.home > .page-content').should('have.length', 1)
	})
})
