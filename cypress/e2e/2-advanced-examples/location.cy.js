/ <reference types="cypress" />

context.skip('Location', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/location')
  })
 
  it('cy.hash() - get the current URL hash', () => {
    // https://on.cypress.io/hash
    cy.hash().should('be.empty')
  })

  it('cy.location() - get window.location', () => {
    // https://on.cypress.io/location
    cy.location().should((location) => {
      expect(location.hash).to.be.empty
      expect(location.href).to.eq('https://example.cypress.io/commands/location')
      expect(location.host).to.eq('example.cypress.io')
      expect(location.hostname).to.eq('example.cypress.io')
      expect(location.origin).to.eq('https://example.cypress.io')
      expect(location.pathname).to.eq('/commands/location')
      expect(location.port).to.eq('')
      expect(location.protocol).to.eq('https:')
      expect(location.search).to.be.empty
    })
  })

  it('cy.url() - get the current URL', () => {
    // https://on.cypress.io/url
    cy.url().should('eq', 'https://example.cypress.io/commands/location')
  })
})

//fix the selector
//The test has been modified to run in 1000x660px mode, when the burger menu appears
context.skip('Check the AIN website', () => {

  it('Open the main page and click startups', () => {
    cy.visit('https://ain.ua/ru/')
    cy.get('#header > div > div.header-bottom > button').click()
    cy.get('#menu-item-912064 > a').click()
    cy.get('#menu-item-1123688').click()
    cy.url().should('contain', 'avtorskie/')
  })
})

context.skip('Check the cypress website', () => {

    it('Open the main page and click startups', () => {
      cy.visit('/')
      cy.get('astro-island + a[href="https://on.cypress.io"]').click()
      cy.url().should('contain', '/why-cypress')
      cy.get('h1').should('contain.text', 'Why Cypress?')
    })
})