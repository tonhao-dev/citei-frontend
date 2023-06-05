import { faker } from '@faker-js/faker';
import {collection} from '../../__tests__/factory/collection'

/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe('e2e/collection', () => {
  describe('Deve carregar a página de coleções corretamente', () => {
    it('Deve exibir o título da página de citações quando ela for carregada', () => {
      cy.visit('http://localhost:3000/colecao');

      cy.get('button').contains('Adicionar coleção').should('be.visible');
    });
  });

  describe('Deve exibir corretamente o modal de cadastrar coleção', () => {
    it('Deve exibir a coleção que foi adicionada pelo usuário através do modal de adicionar coleção', () => {
      const newCollection = collection();
      const src = faker.image.url();
      cy.visit('http://localhost:3000/colecao');
      cy.get('button').contains('Adicionar coleção').click();

      cy.get('input[placeholder="Título da coleção"]').type(newCollection.title);
      cy.get('input[placeholder="Subtítulo da coleção"]').type(newCollection.subtitle);
      cy.get('input[placeholder="Autor da coleção"]').type(newCollection.author);
      cy.get('input[placeholder="Link para imagem de capa"]').type(src);
      cy.get('button').contains('Salvar').click();

      cy.get(newCollection.title).should('be.visible');
    });
   });
})

// Prevent TypeScript from reading file as legacy script
export {}
