describe('Message apéro et affichage artistes', () => {
  it('devrait afficher le message d’accueil et les artistes', () => {
    cy.intercept('GET', '/artists', {
      statusCode: 200,
      body: [
        { id: '1', name: 'Artiste 1', photo: 'photo.jpg' },
        { id: '2', name: 'Artiste 2', photo: 'photo.jpg' }
      ]
    }).as('getArtists');

    cy.visit('/Artistes');
    cy.wait('@getArtists');

    // 1. Vérifie le message apéro
    cy.contains('Bienvenue dans la galerie').should('be.visible');

    // 2. Vérifie qu’on a bien au moins deux artistes
    cy.get('app-artist').should('have.length.at.least', 2);
  });
});
