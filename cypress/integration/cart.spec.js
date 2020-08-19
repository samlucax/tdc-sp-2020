/// <reference types="cypress" />

context('Carrinho', () => {

  it('Visualizar produtos adicionados ao carrinho', () => {
    cy.prepararCarrinho()
    cy.get('tbody tr').as('itensCarrinho');

    cy.get('@itensCarrinho').should('have.length', 1);

    cy.get('@itensCarrinho')
      .contains('Tênis de Caminhada Leve Confortável')
      .parents('tr')
      .find('[data-cy=excluir-item]')
      .click();

  });

  it('Visualizar carrinho sem produtos adicionados', () => {
    cy.visit('http://localhost:3000/cart');
  });

  it('Tentar incrementar a quantidade de produto com estoque esgotado', () => {
    cy.prepararCarrinho();
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

    cy.get('tbody tr').as('itensCarrinho');

    cy.get('@itensCarrinho')
      .find('input[type=number]')
      .next('button')
      .as('botaoIncrementarProduto')

    cy.get('@itensCarrinho')
      .find('input[type=number]')
      .prev('button')
      .as('botaoDecrementarProduto')

    cy.get('@botaoIncrementarProduto').click();

  });

  it('Incrementar a quantidade de produto no carrinho', () => {
    cy.prepararCarrinho();

    cy.get('tbody tr').as('itensCarrinho');

    cy.get('@itensCarrinho')
      .find('input[type=number]')
      .next('button')
      .as('botaoIncrementarProduto')

    cy.get('@itensCarrinho')
      .find('input[type=number]')
      .prev('button')
      .as('botaoDecrementarProduto')

    cy.get('@botaoIncrementarProduto').click();
  });

  it('Excluir produto do carrinho', () => {
    cy.prepararCarrinho()
    cy.get('tbody tr').as('itensCarrinho');

    cy.get('@itensCarrinho').should('have.length', 1);

    cy.get('@itensCarrinho')
      .contains('Tênis de Caminhada Leve Confortável')
      .parents('tr')
      .find('[data-cy=excluir-item]')
      .click();
  });

  it('Finalizar compra', () => {
    cy.prepararCarrinho()
    cy.get('[data-cy=finalizar-pedido]').click();

  });

  it('Tentar finalizar compra sem produtos adicionados', () => {
    cy.visit('http://localhost:3000/cart');
    cy.get('[data-cy=finalizar-pedido]').click();
    cy.contains('Seu carrinho está vazio.')
  });
});