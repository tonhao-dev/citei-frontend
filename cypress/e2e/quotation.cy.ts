import { faker } from '@faker-js/faker';

/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe('e2e/quotation', () => {
  describe('Deve carregar a página de citações corretamente', () => {
    it('Deve exibir o título da página de citações quando ela for carregada', () => {
      cy.visit('http://localhost:3000/');

      cy.get('h1').contains('Citei');
    });
  });

  describe('Deve exibir corretamente o modal de cadastrar citação', () => {
    it('Deve exibir a citação que foi adicionada pelo usuário através do modal de adicionar citação', () => {
      const quotation = faker.word.words(10);
      cy.visit('http://localhost:3000/');
      cy.get('button').contains('Adicionar citação').click();

      cy.get('textarea').type(quotation);
      cy.get('select').select(0);
      cy.get('button').contains('Salvar').click();

      cy.contains(quotation).should('be.visible');
    });

    it('Deve manter o modal aberto quando o usuário clicar no botão de salvar após deixar o campo de citação em branco', () => {
      cy.visit('http://localhost:3000/');
      cy.get('button').contains('Adicionar citação').click();

      cy.get('select').select(0);
      cy.get('button').contains('Salvar').click();

      cy.get('button').contains('Salvar').should('be.visible');
    });
   });

  describe('Deve exibir corretamente as citações de acordo com o texto digitado no campo de filtro', () => {
    it('Deve seguir exibir a citação adicionada por último após seu texto ser digitado no campo de filtragem', () => {
      const quotation = faker.word.words(10);
      cy.visit('http://localhost:3000/');
      cy.get('button').contains('Adicionar citação').click();
      cy.get('textarea').type(quotation);
      cy.get('select').select(0);
      cy.get('button').contains('Salvar').click();

      cy.get('[data-cy="search-icon"]').click();
      cy.get('textbox[data-cy="search-text"]').type(quotation);

      cy.get(quotation).should('be.visible');
    });
  });
})

// Prevent TypeScript from reading file as legacy script
export {}
