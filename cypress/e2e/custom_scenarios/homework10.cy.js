/// <reference types="cypress" />

describe('Testing cypress website', () => {

    beforeEach(() => {
        cy.visit('https://www.cypress.io/')
    })

    it('check subscribe page', () => {
        cy.get('a[href="/subscribe"]').should('be.visible').click();
        cy.get('div.mx-auto > div > h1').should('contain', 'Stay in the loop');
        cy.get('div.grid.grid-cols-1 > div:nth-child(1)').eq(0);
        cy.get('div.grid.grid-cols-1 > div:nth-child(2)').should('contain.text', 'Trusted by teams');
        cy.get('div.grid.grid-cols-1 > div:nth-child(3)').should('contain.text', 'Our mission');
        cy.get('form.relative').should('be.visible')
        .and('have.attr', 'method', 'post');
        cy.get('#subscribe_email').should('be.visible')
        .and('have.attr', 'type', 'email')
        .type('lolomo5828');
        cy.get('form[action="/hubspot"] > div.flex > button').click();
        cy.get('#subscribe-error').should('be.visible')
        .and('contain', 'Please enter a valid email address');
        cy.get('#subscribe_email').clear()
        .type('lolomo5828@gekme.com');
        cy.get('form[action="/hubspot"] > div.flex > button').click();
        cy.get('div.w-full > h2').should('contain', 'Thank you for subscribing!');
      })
})