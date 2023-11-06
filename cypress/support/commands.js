/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

Cypress.Commands.add('loginAndSetCookie', (url, cookieN, cookieV) => {
    cy.visit(url)
    cy.setCookie(cookieN, cookieV)
});

Cypress.Commands.add('loginAndSetLocalStorage', () => {
    cy.request({
		method: 'POST',
		url: '/api/auth/login',
		body: {
			email: 'email@dmytro.com',
			password: 'abc123',
		},
	}).then((response) => {
		const accessToken = response.body.token;
        // store the token in JSON
       // fs.writeFileSync('token.json', JSON.stringify(accessToken)) 
		// Store the access token in local
		localStorage.setItem('auth-token', accessToken);
	});
});

Cypress.Commands.add('createNewCategory', (category) => {

    const accessToken = window.localStorage.getItem('auth-token')
    
    cy.request({
        method: 'POST',
        url: 'api/category',
        body: {
            name: category
        },
        headers: {
            authorization: `${accessToken}`
        }
    }).then((response) => {
        const categoryId = response.body._id;
		// Store the categoryId in Cypress environment variable
        Cypress.env('categoryId', categoryId);
        
        return response.body;
    })
});

Cypress.Commands.add('createNewProduct', (position) => {

    const accessToken = window.localStorage.getItem('auth-token');
    const categoryId = Cypress.env('categoryId');

    cy.request({
        method: 'POST',
        url: 'api/position',
        body: {
            category: categoryId,
            cost: 1,
            name: position
        },
        headers: {
            authorization: `${accessToken}`
        }
    }).then((response) => {
        return response.body
    })
});

Cypress.Commands.add('removeCategoryById', () => {
    const accessToken = window.localStorage.getItem('auth-token');
    const categoryId = Cypress.env('categoryId');

    cy.request({
        method: 'DELETE',
        url: `/api/category/${categoryId}`,
        headers: {
            authorization: `${accessToken}`
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
    })
});

Cypress.Commands.add('removeCategoryById', () => {
    const accessToken = window.localStorage.getItem('auth-token');
    const categoryId = Cypress.env('categoryId');

    cy.request({
        method: 'DELETE',
        url: `/api/category/${categoryId}`,
        headers: {
            authorization: `${accessToken}`
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
    })
});


