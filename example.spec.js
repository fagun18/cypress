describe('Example Test Suite', () => {
  it('should visit the base URL', () => {
    cy.visit('/');
    cy.title().should('contain', 'Home');
  });

  it('should perform a login', () => {
    const username = 'insert target username';
    const password = 'insert target password';

    cy.visit('/login');
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click();

    // Add additional assertions or actions as needed
  });
});

