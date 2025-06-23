describe('Vérification de la réponse API', () => {
  it('vérifie que la réponse à /artists retourne 200', () => {
    // Intercepte et espionne la requête sans altérer la réponse
    cy.intercept('GET', '/artists').as('getArtists');

    cy.visit('/Artistes');

    // Attend que la requête soit faite
    cy.wait('@getArtists').its('response.statusCode').should('eq', 200);
  });
});
