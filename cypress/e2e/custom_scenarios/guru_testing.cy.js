/// <reference types="cypress" />

import MainPage from "../../pages/main";
import PostmanPage from "../../pages/postman_page";
import { global_data } from "../../data/global_text";

describe('Testing guru website', () => {
    const mainpage = new MainPage();
    const postmanpage = new PostmanPage(); 

    beforeEach(() => {
         cy.visit('https://www.guru99.com')
        // cy.setCookie('authCoka', 'someCookie')
        cy.loginAndSetCookie('/', 'authCoka', 'someCookie')
    })

    it('Open the website guru99', () => {
        cy.get('h1.thick-heading', {timeout: 6000}).should('be.visible');
        cy.wait(4000);
    });

    it.skip('Check search and validate results', () => {
        cy.get('button.search-toggle-open').should('be.visible')
        .and('have.attr', 'data-toggle-target', '#search-drawer')
        .click();
        cy.get('input.search-field').should('be.visible')
        .and('have.attr', 'type', 'search')
        .type('functional testing{enter}');
        cy.url().should('contain', '/search_gcse?q=functional+testing');
        cy.get('div#resInfo-0').should('not.be.empty')
        .and('contain', 'About')
    })

    it('click on software testing variant from dropdown list', () => {
        cy.get('#primary-menu span.nav-drop-title-wrap').eq(0).click();
        cy.get('ul.sub-menu.clicked').should('have.length', '1');

        cy.get('ul.sub-menu.clicked li').eq(7).find('a')
        .should('have.attr', 'href', '/software-testing.html')
        .and('have.text', 'Software Testing').click();
        
        cy.get('div.code-block-1 + h2').should('contain', 'Software Testing Training Summary')
        // cy.wait(20000);
        cy.getCookie('authCoka').should('exist');

        cy.get('p strong').then(($textFundamentalsElement) => {
            $textFundamentalsElement.text();
        })
    });

    it('open the software from main page', () => {
        cy.visit('/software-testing.html')
        cy.log('Opened the soffdsdkflsdfklsdkfl testing page by link')
        // added command for log mesage with cy.task functionality
        cy.task('log', 'another message from js code')
    });

    it('click on postman link from dropdownlist POM', () => {
        mainpage.dropdownlist().eq(0).click();
        mainpage.elementindropdownlist().eq(16)
        .should('have.text', global_data.postman_text).click();
        postmanpage.imagewithPostmanDetails( {timeout: 15000} ).should('be.visible');
    });

    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
    
});
    


    

