describe('Test the home page', () => {
	it('visits the app root url', () => {
		cy.visit('/')
		cy.get('title').contains('U P P E R C A S E')
	})
})
