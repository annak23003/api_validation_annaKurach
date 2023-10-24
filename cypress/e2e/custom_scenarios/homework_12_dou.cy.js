import { mainPageDOU } from "../../pages/main_dou";
import { forumPageDOU } from "../../pages/forum_dou";
import { global_data } from "../../data/global_text";

describe('check DOU website', () => {
 
    beforeEach(() => {
        cy.visit('https://dou.ua')
    })
    it('open forum page and check elements', () => {
            mainPageDOU.menulist().should('be.visible');
            mainPageDOU.elementmenuforum().click();
            forumPageDOU.verifyArticleSection().should('be.visible');
            forumPageDOU.commentheader().eq(0).should('be.visible')
            .should('have.text', global_data.comment_text);
            forumPageDOU.dropdownchoosetopic().should('be.visible')
            .should('have.attr', 'name', 'topic')
    });
});