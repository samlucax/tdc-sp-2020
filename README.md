<h1 align="center">Screenplay w/ Cypress</h1>

<p align="center">Projeto para estudo do padrão de projetos ScreenPlay utilizando a ferramenta de testes automatizados Cypress.</p>

<p align="center"><img src="https://res.infoq.com/articles/Beyond-Page-Objects-Test-Automation-Serenity-Screenplay/en/resources/1fig3.jpg" width="90%"/></p>

### Executar o projeto: 
 - `yarn`
 - `yarn json-server server.json -p 3333`
 - `yarn start`
 
### Executar os testes:
- `yarn run cy:open`

## Sobre o ScreenPlay

O Screenplay é um *Design Pattern* para arquiteturas de testes, assim como o *Page Objects*. É também conhecido por *The Journey Pattern*. 

Basicamente, é a aplicação dos princípios de design do SOLID para arquitetura de testes.

Os testes são pensados e descrevem como um usuário (actor) interage com a aplicação para chegar a um objetivo.

Como a imagem acima ilustra, um *Ator* possui *Habilidades*, que o habilitam a executar *Ações*.
Para executar uma *Task/Tarefa*, o ator segue uma sequência de *Ações* interagindo com a *Aplicação*.
Constantemente, para saber se está no caminho certo da *Task*, o ator faz *Perguntas* sobre o estado da *Aplicação*.

Vamos pensar em alguns exemplos:

**Aplicação**: e-commerce (fake) da Netshoes

**Ator**: Atleta

**Habilidades**:
 - clicar
- digitar
- visualizar

**Ações**:
 - acessar a pagina de produtos
 - clicar no botao para adicionar algum produto
 - clicar no botão de excluir algum produto
 - clicar no botao para finalizar pedido

**Tarefas/Tasks**:
 - Adicionar um produto ao carrinho
 - Excluir itens adicionados ao carrinho
 - Finalizar um pedido

**Perguntas**:
 - o produto foi adicionado ao carrinho?
 - a quantidade de itens no carrinho está correta?
 - o preço total está correto?

Bom, agora que conhecemos melhor o *Ator*, podemos pensar em um fluxo completo usando suas tarefas:

**Comprar um produto**:
- *Tarefa*: Adicionar um produto ao carrinho
- *Pergunta*: o produto foi adicionado ao carrinho?
- *Pergunta*: o preço total está correto?
- *Tarefa*: Finalizar um pedido

---

Esta forma de organização pode ser aplicada para diversos contextos, e por ser *Centrado no Usuário* isso nos leva a ter um conhecimento maior e dar mais atenção ao usuário da aplicação. Logo, para *Testes de Aceitação de Usuário* este padrão se torna muito útil.

[IN PROGRESS]

**Curiosidade:**
Surgiu em 2007~2008 (Antony Marcano), refinado por Andy Palmer em 2009, e vem sendo utilizado (e refinado) desde então.

## Sobre o projeto em testes - Netshoes Fake

Projeto para estudo utilizando react, redux, redux-saga, reactotron, json-server e styled-components, desenvolvido por <a href="https://github.com/jbarcela">Jonathan Barcela</p>

### Executar o projeto: 
 - `yarn`
 - `yarn json-server server.json -p 3333`
 - `yarn start`
 
 
 ### Home
 ![Home Page](image1.png?raw=true "Home")
 
 
 ### Carrinho
![Cart Page](image2.png?raw=true "Carrinho")


