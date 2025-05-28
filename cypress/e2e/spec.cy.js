describe('Parabank Login Test', () => {
  it('should log in with valid credentials', () => {
    cy.visit('/'); 

    cy.get('input[name="username"]').type('john');

    cy.get('input[name="password"]').type(.'demo');

    cy.get('input[type="submmit"][value="Log In"]').click();

    cy.url().should('include', '/overview');
  });
});