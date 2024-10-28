
Feature: Alterar foto do produto

  Scenario: Verificar o retorno do endpoint de atualizar foto 
    Given eu realizo o login para capturar o token
    When eu realizo a requisição POST para alterar a foto do produto
    Then eu devo receber o response com status 200
