
Feature: Buscar por um produto via Api

  Scenario: Verificar se realizou a busca do produto
    When eu realizo a requisição GET com o nome do produto "hp elite x2"
    Then eu devo receber o response com status 200
    And deve listar apenas um produto
    And o produto dever ser o "HP Elite x2 1011 G1 Tablet"