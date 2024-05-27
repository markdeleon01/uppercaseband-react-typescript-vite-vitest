describe('Test the discography page', () => {
	it('visits the discography url', () => {
		cy.visit('/discography')

		cy.title().should('eq', 'U P P E R C A S E')
		cy.get('.discography').should('have.length', 1)
		cy.contains('h1', 'U P P E R C A S E')
		cy.contains('h2', 'Discography')
		cy.get('.release-item').should('exist')
		cy.get('.release-item').should('have.length', 6)
	})

	it('clicks the discography link', () => {
		cy.visit('/')
		cy.get('a[href="/discography"]').click()

		cy.title().should('eq', 'U P P E R C A S E')
		cy.get('.discography').should('have.length', 1)
		cy.contains('h1', 'U P P E R C A S E')
		cy.contains('h2', 'Discography')
		cy.get('.release-item').should('exist')
		cy.get('.release-item').should('have.length', 6)
	})
})
