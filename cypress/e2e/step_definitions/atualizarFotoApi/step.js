import { Given ,And, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given('eu realizo o login para capturar o token', () => {
    cy.apiLogin()
})

When('eu realizo a requisição POST para alterar a foto do produto', () => {
    cy.atualizarFoto().as('response');
})

Then('eu devo receber o response com status 200', () => {
    cy.get('@response').its('status').should('eq', 200);
})

