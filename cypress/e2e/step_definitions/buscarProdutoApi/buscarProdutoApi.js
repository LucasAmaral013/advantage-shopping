import { And, When, Then } from 'cypress-cucumber-preprocessor/steps'

When('eu realizo a requisição GET com o nome do produto {string}', () => {
    cy.buscarProdutoApi().as('response');
})

Then('eu devo receber o response com status 200', () => {
    cy.get('@response').its('status').should('eq', 200);
})

And ('deve listar apenas um produto', () => {
    cy.get('@response').its('body').its('length').should('eq', 1);
})

And('o produto dever ser o {string}', (produto) => {
    cy.get('@response').its('body[0].products[0].productName').should('eq', produto);

})