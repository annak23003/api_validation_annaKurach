
export const mainPageDOU = {
    menulist(){
        return cy.get('body > div.g-page > header')
    },
    elementmenuforum() {
        return cy.get('body > div.g-page > header > ul > li:nth-child(3) > a')
    }
}