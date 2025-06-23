describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('[data-cy="add-button"]').should('be.visible');
    // Vérifie que le texte "Coucou" est apparu
    cy.get('Coucou').should('not.exist');
    // Clique sur le bouton avec l’icône
    cy.get('[data-cy="add-button"]').click();
    // Vérifie que le texte "Coucou" est apparu
    cy.contains('Coucou').should('be.visible');
  })
})
