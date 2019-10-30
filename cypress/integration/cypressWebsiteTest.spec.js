import * as Constants from '../helpers/urls'

describe('Cypress.io website verification', () => {
  it('Open Cypress homepage', () => {
    cy.visit(Constants.homePageUrl);
    const cypressLogo = "header div[class = ' gatsby-image-wrapper']";
    const loginBtn = "header a[aria-label = 'login']";

    cy.get(cypressLogo).should('be.visible');
    cy.get(loginBtn).should('be.visible');
  });

  it('Open Docs link', () => {
    const docsLink = "div[class *= 'header__Menu'] ul:nth-child(2) li:nth-child(3) a";
    const title = '.article-header h1';
    
    // http://qaru.site/questions/7078829/cypress-get-href-attribute
    cy.get(docsLink)
      .invoke('attr', 'href')
      .then(href => {
        cy.visit(href);
      });

    cy.get(title)
      .should('be.visible')
      .and('contain', "Why Cypress?");
  });

  it('Perform search for Should from Docs page', () => {
    const searchInput = 'header input:nth-child(2)';
    const shouldSearchResult = "a[href = 'https://docs.cypress.io/api/commands/should.html#Syntax#article']";
    const articleTitle = '.article-title';

    cy.get(searchInput).type('should');
    cy.get(shouldSearchResult).click();
    cy.get(articleTitle)
      .should('be.visible')
      .and('contain', 'should');
  });
});
