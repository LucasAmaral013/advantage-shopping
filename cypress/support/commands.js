
Cypress.Commands.add('buscarProdutoApi', () => {
    return cy.request({
      method: "GET",
      url: "www.advantageonlineshopping.com/catalog/api/v1/products/search?name=hp elite x2",
      body: {},
    });
  });


Cypress.Commands.add('apiLogin', function(){
  cy.request({
    method: 'POST',
    url: 'https://www.advantageonlineshopping.com/accountservice/accountrest/api/v1/login',
    headers: {

    },
    body: {
      "email":"lucasamaral@teste.com",
      "loginPassword": "Pwd123456",
      "loginUser": "lucas"
    }
  }).then (function(response){
    expect(response.status).to.eq(200)
    Cypress.env('token', response.body.statusMessage.token)
    cy.log(Cypress.env('token'))
  })

})


Cypress.Commands.add('atualizarFoto', ()=>{

  cy.fixture('fone.jpg', 'binary').as('fone')
  .then ((imgContent) => {
    const blob = Cypress.Blob.binaryStringToBlob(imgContent, 'image.jpg')
    const formData = new FormData()
    formData.append('file', blob, 'fone.jpg')
    return cy.request({
      method: "POST",
      url: "https://www.advantageonlineshopping.com/catalog/api/v1/product/image/748704368/%252catalog%253fetchImage%253Fimage_id%2532100/yellow?product_id=12",
      headers: {
        Authorization: 'Bearer ' + Cypress.env('token'),
      },
      body: formData
    });
  })
})