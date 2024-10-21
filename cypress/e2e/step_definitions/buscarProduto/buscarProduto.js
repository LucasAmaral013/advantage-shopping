import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import homePage from '../PO/homePage'

Given('eu acesso a homePage', () => {
    homePage.go()
})

And('eu clico para buscar por um produto', () => {
    homePage.btnSearchProduct()
})


When('eu preencher com o nome do produto “hp elite x2”', () => {
    homePage.fillSearch()
})


Then('deve carregar o produto com suas informações', () => {
    homePage.assertProduct()
})