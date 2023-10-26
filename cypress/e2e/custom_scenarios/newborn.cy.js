/// <reference types="cypress" />

describe('Login with api request', () => {

    beforeEach(() => {
        cy.loginAndSetLocalStorage()
    })
    it('set login data', () => {
        cy.visit('http://5.189.186.217/overview')
        cy.get('div.card-content').eq(0).should('be.visible')
    });

    it('Create category', () => {
        cy.createNewCategory('soap')
        cy.visit('http://5.189.186.217/categories')
        cy.wait(5000)
        cy.get('.content a.collection-item').eq(0).should('be.visible')
    });

});