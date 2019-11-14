import * as Constants from '../helpers/urls'

describe('Cypress.io search test', () => {
  it('Perform search for Should from Docs page', () => {
    const docsLink = "li > [aria-label='docs']";
    const searchInput = 'header input:nth-child(2)';
    const shouldSearchResult = "a[href = 'https://docs.cypress.io/api/commands/should.html#Syntax#article']";
    const articleTitle = '.article-title';

    cy.visit(Constants.homePageUrl);  
    // http://qaru.site/questions/7078829/cypress-get-href-attribute
    cy.get(docsLink)
      .invoke('attr', 'href')
      .then(href => {
        cy.visit(href);
      });

    cy.get(searchInput).type('should');
    cy.get(shouldSearchResult).click();
    cy.get(articleTitle)
      .should('be.visible')
      .and('contain', 'should');
  });
});
