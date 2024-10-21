 
class HomePage {

    go(){
        cy.visit('https://advantageonlineshopping.com/#/')
        cy.wait(5000)
    }

    btnSearchProduct(){
        cy.get('#menuSearch').click()
    }

    fillSearch(){
        cy.get('#autoComplete').type('hp elite x2')    
    }

    btnCategory(categoria){
        cy.get(categoria).click()
    }


    assertProduct(){
        cy.contains('p', 'HP ELITE X2 1011 G1 TABLET').should('be.visible')
    }


}
export default new HomePage()