Feature: Adicionar o produto no carrinho

  Scenario: Escolher uma categoria, e adicionar um produto no carrinho
    Given eu acesso a homePage
    And eu escolho uma categoria
    And seleciono um produto
    When clicar para adicionar no carrinho
    Then deve carregar o produto com suas informações no popup


  Scenario: Verificar os produtos cadastrados, na tela de pagamento
    Given eu acesso a homePage
    And eu escolho uma categoria
    And seleciono dois produto
    When clicar para ir para o checkout
    Then deve carregar uma ordem de pagamento com os dois produtos
