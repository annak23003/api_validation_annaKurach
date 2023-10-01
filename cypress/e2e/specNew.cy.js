describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  it('check cypress pricing', function() {
    cy.visit('/');
    cy.get(':nth-child(5) > .nav-bar-link').click();
    cy.get('.osano-cm-dialog__close > svg').click();
    cy.get('[data-cy="pricing-annually-top"]').click();
    cy.get('#Annually-top').check();
    cy.get('[data-cy="pricing-annually-top"]').click();
    cy.get('#Annually-top').check();
    cy.get('[data-cy="pricing-monthly-top"]').click();
    cy.get('#Monthly-top').check();
    cy.get(':nth-child(3) > .mb-\\[8px\\]').click();
    cy.get(':nth-child(3) > .mb-\\[8px\\]').click();
    cy.get(':nth-child(3) > .mb-\\[8px\\]').should('have.text', 'Business');
    cy.get('[data-cy="pricing-plan-free"]').should('have.text', 'Start for free');
  });

})
