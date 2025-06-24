describe('Affichage erreur backend', () => {
  it('devrait afficher un message d’erreur si le backend échoue', () => {
    cy.visit('/Artistes')
    // Vérifie que le message d'erreur n'est pas affiché
    cy.get('[data-cy="erreur-message"]').should('not.exist');
    // Simule une erreur côté serveur
    cy.intercept('GET', 'https://artists-api-ndhd.onrender.com/artists', {
      statusCode: 500,
      body: { message: 'Erreur simulée' }
    }).as('getArtistsError');
    // Attend la génération d'erreur
    cy.wait('@getArtistsError');
    // Vérifie que l'erreur est affichée
    cy.get('[data-cy="erreur-message"]').should('be.visible');
    // Vérifie que la liste artistes est vide
    cy.get('list-artist').should('not.exist');
  });
});
