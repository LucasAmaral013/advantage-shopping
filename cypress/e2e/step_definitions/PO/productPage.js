class ProductPage {

    btnAddCart(){
        cy.contains('button', 'ADD TO CART').click()
    }

    btnCheckout(){
        cy.get('#checkOutPopUp').click()
    }

    btnCategory(){
        cy.contains('a', ' SPEAKERS ').click()
    }

    assertProductPopUp(){
        cy.contains('h3', 'BOSE SOUNDLINK WIRELESS SPE...').should('be.visible')
    }

}

export default new ProductPage()