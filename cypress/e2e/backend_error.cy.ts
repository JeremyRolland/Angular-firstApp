describe('Affichage erreur backend', () => {
  it('devrait afficher un message d’erreur si le backend échoue', () => {
    cy.intercept('GET', 'https://artists-api-ndhd.onrender.com/artists', {
      statusCode: 500,
      body: { message: 'Erreur simulée' }
    }).as('getArtistsError');

    cy.visit('/Artistes');
    cy.wait('@getArtistsError');

// Teste ta gestion d’erreur
    cy.contains('Erreur').should('be.visible');


    // 2. Vérifie qu’aucun artiste ne s’affiche
    cy.get('app-artist').should('have.length', 0);
  });
});
