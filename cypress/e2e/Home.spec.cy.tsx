describe('Test the home page', () => {
	it('visits the app root url', () => {
		cy.visit('/')
		cy.get('h1').contains('U P P E R C A S E')
	})

	it('has navigation links', () => {
		cy.visit('/')
		cy.get('#nav').should('exist')
		cy.get('#nav').should('have.length', 1)
		cy.get('#nav > a').should('have.length', 4)
	})

	it('has content links', () => {
		cy.visit('/')
		cy.get('.home').find('a').should('have.length', 3)
	})
})
