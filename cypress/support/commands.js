// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// este comando é um incentivo a escrita de métodos e classes descritivos, que sirvam para os logs
Cypress.Commands.add("logt", (message) => {
  
  message = message.replace(/([A-Z])/g, ' $1').trim()
  message = message.replace(/([A-Z])/g, ' $1').toLowerCase()
  message = message.replace(/([.])/g, ' ').trim()

  cy.log(message)
})

Cypress.Commands.add("prepararCarrinho", () => {
  cy.visit('http://localhost:3000')

  cy.get('button')
  .find('span')
  .first()
  .click();
})