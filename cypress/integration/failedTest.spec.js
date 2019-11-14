import * as Constants from '../helpers/urls'

describe('Test will be failed', () => {
  it('Fail test', () => {
    const docsLink = "li > [aria-label='docs']";

    cy.visit(Constants.homePageUrl);  
    // http://qaru.site/questions/7078829/cypress-get-href-attribute
    cy.get(docsLink)
      .invoke('fail', 'fail')
      .then(href => {
        cy.visit(href);
      });
  });
});
