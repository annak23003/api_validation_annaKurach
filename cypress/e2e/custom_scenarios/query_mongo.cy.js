import { ObjectId } from 'mongodb';

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
            cy.request({
                method: 'POST',
                url: '/api/users/register',
                headers: {
                    Authorization: `Bearer ${Cypress.env('authTokenMongo')}`
                },
                body: {
                    firstName: 'fff2953',
                    lastName: 'sss2530',
                    username: 'fff2530',
                    password: 'abc1253034'
                }
            })
        })
        it('findMany', () => {
            cy.findMany({}, { collection: 'users' }).then((mongoresult) => {
                cy.task('log', mongoresult);
            });
        })
    })
})


