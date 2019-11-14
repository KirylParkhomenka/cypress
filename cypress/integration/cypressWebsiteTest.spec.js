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
    const docsLink = "li > [aria-label='docs']";
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
});
