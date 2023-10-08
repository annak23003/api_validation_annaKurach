import MainPage from "../../pages/main";

describe('Testing guru website', () => {
    const mainpage = new MainPage();

    beforeEach(() => {
         cy.visit('https://www.guru99.com')
 
    })

    it('should fetch and save URLs to a JSON file', () => {
        cy.task('saveUrls').then((urls) => {
          console.log(urls);
        });

    });

});