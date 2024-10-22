
# Projeto Advantage Shopping

Repositório para disponibilizar automações do Caso Advantage Shopping


## Instalação

-  Instalar Node.js.


1. Crie scripts de automação para os cenários
Para automatizar o plano de testes desenvolvido, foi utilizada a ferramenta de testes Cypress e a biblioteca cypress-cucumber-preprocessor. Para poder executar esses casos de teste você precisa clonar este repositório GitHub e executar o seguinte comando de dentro do diretório principal para instalar as dependências: `npm install `. Para executar os testes de API, só precisa instalar o cypress.

Após instalar as dependências você pode executar todos os testes do plano de testes que são automatizados usando o comando: `npm run test`. Observe que esses testes serão executados localmente e no modo headless, o que significa que você não verá os testes reais sendo executados, apenas através da linha de comando com os resultados no final. Se você deseja ver os testes rodando você só precisa usar o comando `npx cypress open` para abrir o cliente Cypress e a partir daí você pode escolher a especificação que deseja executar e poderá ver o teste rodando visualmente em uma instância do Chrome ou, dentre outros navegadores.


    
## Observações

No teste de api optei por fazer no modo tradicional já que o BDD é voltado para comportamento e não aspectos técnicos para o envio das request. Infelizmente, eu não consegui avançar com o teste que precisa fazer o upload da imagem no teste de api 

