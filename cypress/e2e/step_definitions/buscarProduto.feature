Feature: Buscar por um produto

  Scenario: Realizar a busca de um produto
    Given eu acesso a homePage
    And eu clico para buscar por um produto
    When eu preencher com o nome do produto “hp elite x2”
    Then deve carregar o produto com suas informações
