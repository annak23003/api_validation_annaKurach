/// <reference types="cypress" />
import { faker } from "@faker-js/faker"

describe('login with api request', () => {

    beforeEach(() => {
        cy.loginAndSetLocalStorage()
    })

    it('send login data', () => {
        cy.visit('/overview')
        cy.get('div.card-content').eq(0).should('be.visible')
    })

    it('Create category', () => {
        let categoryName = faker.commerce.product()
        cy.createNewCategory(categoryName)
        cy.visit('/categories')
        cy.wait(5000)
        cy.get('.content a.collection-item', {timeout: 5000}).should('be.visible')
    })

    it('Create product', () => {
        const categoryId = Cypress.env('categoryId');
        let productName = faker.commerce.productName()
        cy.createNewProduct(productName);
        cy.task('log', productName)
        cy.visit(`/categories/${categoryId}`);
        //check product
        cy.get('.collection-item.collection-item-icon', {timeout: 5000}).should('be.visible');
    })

    it('Remove the category by id', () => {
        const categoryId = Cypress.env('categoryId');
        cy.removeCategoryById();
        cy.visit(`/categories/${categoryId}`).should('not.be.visible');
    })
})