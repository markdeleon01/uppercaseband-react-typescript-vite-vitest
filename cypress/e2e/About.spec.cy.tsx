describe('Test the about page', () => {
	it('visits the about url', () => {
		cy.visit('/about')

		cy.title().should('eq', 'U P P E R C A S E')
		cy.get('.about').should('have.length', 1)
		cy.contains('h1', 'U P P E R C A S E')
		cy.contains('h2', 'Band Members')
		cy.get('.member-item').should('exist')
		cy.get('.member-item').should('have.length', 4)
	})

	it('clicks the about link', () => {
		cy.visit('/')
		cy.get('a[href="/about"]').click()

		cy.title().should('eq', 'U P P E R C A S E')
		cy.get('.about').should('have.length', 1)
		cy.contains('h1', 'U P P E R C A S E')
		cy.contains('h2', 'Band Members')
		cy.get('.member-item').should('exist')
		cy.get('.member-item').should('have.length', 4)
	})
})
