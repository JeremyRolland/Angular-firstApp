describe('Vérification de la réponse API', () => {
  it('vérifie que la réponse à /artists retourne 200', () => {
    // Intercepte et espionne la requête sans altérer la réponse
    cy.intercept('GET', 'https://artists-api-ndhd.onrender.com/artists').as('getArtists');

    cy.visit('/Artistes');

    // Attend que la requête soit faite
    cy.wait('@getArtists').then((interception) => {
      expect(interception.response?.statusCode).to.eq(200);
      expect(interception.response?.body).to.have.length.greaterThan(0);
      expect(interception.response?.body[0]).to.have.property('name');
    });

  });
});
