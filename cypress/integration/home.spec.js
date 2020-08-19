/// <reference types="cypress" />

context('Home', () => {
  it('Visualizar produtos que possuem estoque', () => {
    cy.server()
    cy.route({
      method: 'GET',
      url: '**/products',
      status: 200,
      response: 
        [{
          "id": 1,
          "title": "Tênis de Caminhada Leve Confortável",
          "price": 179.9,
          "image": "https://static.netshoes.com.br/produtos/tenis-nike-revolution-4-masculino/26/D12-9119-026/D12-9119-026_detalhe2.jpg?ims=326x"
        }]
    }).as('GETProducts');

    cy.visit('http://localhost:3000/');
  });

  it('Visualizar home com apenas um produto disponível', () => {
    // desafio: crie um teste para visualizar a homepage com apenas um produto
    // dica: use os comandos de fixture, server e route
  });

  it('Visualizar home sem produtos disponíveis em estoque', () => {
    // desafio: crie um teste para visualizar a homepage sem produtos.
    // dica: já sabe as dicas né? (fixture, server e route)
  });

  it('Adicionar produto e ir ao carrinho', () => {
    cy.visit('http://localhost:3000/');

    cy.get('button')
      .find('span')
      .first()
      .click();

    cy.url().should('contain', 'cart')
  });

  it.skip('Adicionar produto e permanecer na home', () => {
    cy.visit('http://localhost:3000/');

    cy.get('div > svg')
      // .find('div svg')
      .first()
      .click();

    cy.url().should('contain', 'cart')
  });

  it('Tentar adicionar produto com estoque zerado ao carrinho', () => {
    cy.visit('http://localhost:3000/');
    cy.server();
    cy.route({
      method: 'GET',
      url: '**/stock/**',
      status: 200,
      response: {
        "id": 1,
        "amount": 0
      }
    }).as('GETStock');

    cy.get('button')
      .first()
      .click();

    cy.get('div[role=alert]')
      .should('be.visible')
      .and('have.text', 'Quantidade solicitada fora de estoque')
    
    cy.get('div[role=alert]')
      .parent()
      .should('have.css', 'background-color', 'rgb(231, 76, 60)');
  });


});