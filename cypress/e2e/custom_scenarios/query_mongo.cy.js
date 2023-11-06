import { ObjectId } from 'mongodb';
import { faker } from "@faker-js/faker"

describe('Find data', () => {

    context('usage of mongodb', () => {

        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult);
            });
        })
    })

    context('UI & API request', () => {

        it('lodin by UI', () => {
            cy.request({
                method: 'POST',
                url: '/api/users/authenticate',
                body: {username: "test", password: "qwerty1234"}
            }).then((response) => {
                const authToken = response.body.token;
                Cypress.env('authTokenMongo', authToken);
            })
        })

        it('create user', () => {
            let createdUsername1;
            cy.request({
                method: 'POST',
                url: '/api/users/register',
                headers: {
                    Authorization: `Bearer ${Cypress.env('authTokenMongo')}`
                },
                body: {
                    firstName: faker.person.firstName(),
                    lastName: faker.person.lastName(),
                    username: faker.word.sample(),
                    password: faker.string.alphanumeric()
                    
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
                createdUsername1 = response.body.username;
                Cypress.env('createdUsername', createdUsername1);
                cy.request({
                    method: 'GET',
                    url: '/api/users',
                    headers: {
                        Authorization: `Bearer ${Cypress.env('authTokenMongo')}`
                    }
                    }).then((response) => {
                        const usernames = response.body.map(users => users.username);
                        cy.log('Usernames from API Response:', usernames);
                        expect(usernames).to.include(createdUsername1);
                    })
            })
        })
        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult);
            });
        })
    })
})

