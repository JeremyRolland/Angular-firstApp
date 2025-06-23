describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/')
    cy.get('[data-cy="navbar-button"]').should('be.visible');
    cy.get('[data-cy="navbar-button"]').click();
    cy.get('[data-cy="accueil-button"]').should('be.visible');
    cy.get('[data-cy="artistes-button"]').should('be.visible');
    cy.get('[data-cy="artistes-button"]').click();
    cy.url().should('include', '/Artistes');
  })
})
