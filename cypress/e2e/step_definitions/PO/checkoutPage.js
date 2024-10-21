class CheckoutPage {
    assertOrderSummary(produto1, produto2){
        cy.contains('h3', 'ORDER PAYMENT')
        cy.get('#userCart').contains('h3', produto1).should('be.visible')
        cy.get('#userCart').contains('h3', produto2).should('be.visible')
    }
}
export default new CheckoutPage()