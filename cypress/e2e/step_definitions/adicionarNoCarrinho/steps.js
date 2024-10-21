import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import homePage from '../PO/homePage'
import categoryPage from '../PO/categoryPage'
import productPage from '../PO/productPage'
import checkoutPage from '../PO/checkoutPage'


Given('eu acesso a homePage', () => {
    homePage.go()
})

And('eu escolho uma categoria', () => {
    homePage.btnCategory('#speakersImg')
})

And('seleciono um produto', () => {
    categoryPage.btnProduct('Bose SoundLink Wireless Speaker')
})
And('seleciono dois produto', () => {
    categoryPage.btnProduct('Logitech X100 Speaker System - Wireless Speaker(s)')
    productPage.btnAddCart()
    productPage.btnCategory()
    categoryPage.btnProduct('HP S9500 Bluetooth Wireless Speaker')
    productPage.btnAddCart()
})


When('clicar para adicionar no carrinho', () => {
    productPage.btnAddCart()
})

When('clicar para ir para o checkout', () => {
    productPage.btnCheckout()
})


Then('deve carregar o produto com suas informações no popup', () => {
    productPage.assertProductPopUp()
})

Then('deve carregar uma ordem de pagamento com os dois produtos', () => {
    checkoutPage.assertOrderSummary('HP S9500 BLUETOOTH WIRELESS...', 'LOGITECH X100 SPEAKER SYSTE...')
})