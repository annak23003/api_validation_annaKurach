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

        it('create user', () => {
            cy.request({
                method: 'POST',
                url: '/api/users/register',
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NTNhOWJmMDNkYTQ1NTlmYjkwZjdhZTYiLCJpYXQiOjE2OTgzNDMwMzUsImV4cCI6MTY5ODk0NzgzNX0.TZQzUcR5M0qDjhH7HmP5713sENp_KYM87sq0nCO8MzI'
                },
                body: {
                    firstName: 'fff2',
                    lastName: 'sss2',
                    username: 'fff2',
                    password: 'abc1234'
                }
            })
        })
    })
})


