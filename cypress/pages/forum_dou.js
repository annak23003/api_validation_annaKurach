
export const forumPageDOU = {
    
    verifyArticleSection() {
        return cy.get('div.b-showcase.m-hide > div:nth-child(1)');
    },
    commentheader() {
        return cy.get('div.b-sidebar-comments > h3')
    },
    dropdownchoosetopic() {
        return cy.get('div.page-head > select')
    }
}


