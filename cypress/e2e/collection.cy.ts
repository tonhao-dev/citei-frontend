import { faker } from '@faker-js/faker';
import {collection} from '../../__tests__/factory/collection'

/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

beforeEach(() => {
  cy.visit('http://localhost:8080');

  cy.wait(1000);
})

// Cypress E2E Test
describe('e2e/collection', () => {
  describe('Deve carregar a página de coleções corretamente', () => {
    it('Deve exibir o botão de adicionar coleção quando ela for carregada', () => {
      

      cy.get('button').contains('Adicionar coleção').should('be.visible');
    });
  });

  describe('Deve exibir corretamente o modal de cadastrar coleção', () => {
    it('Deve exibir a coleção que foi adicionada pelo usuário através do modal de adicionar coleção', () => {
      const newCollection = collection();
      cy.addCollection({ ...newCollection, image: newCollection.image.url })

      cy.wait(1000);

      cy.get('h3').contains(newCollection.title).should('be.visible');
    });
  });

  describe('Deve filtrar as coleções corretamente', () => {
    it('Deve exibir a coleção cujo título foi digitado no campo de buscar', async() => {
      const collectionOne = collection();
      const collectionTwo = collection();

      cy.addCollection({ ...collectionOne, image: collectionOne.image.url })
      cy.addCollection({ ...collectionTwo, image: collectionTwo.image.url })

      cy.wait(1000);
  
      cy.get('[aria-label="search-icon"]').click();
      cy.get('input[name="search-input"').type(collectionOne.title);

      cy.wait(1000);

      cy.get('h3').contains(collectionOne.title).should('be.visible');
    });

    it('Não deve exibir uma coleção quando o título digitado não for igual ao da coleção criada', async () => {
      const collectionOne = collection();
      const collectionTwo = collection();

      cy.addCollection({ ...collectionOne, image: collectionOne.image.url })
      cy.addCollection({ ...collectionTwo, image: collectionTwo.image.url })

      cy.wait(1000);
  
      cy.get('[aria-label="search-icon"]').click();
      cy.get('input[name="search-input"').type(collectionOne.title);

      cy.wait(1000);

      cy.get('h3').contains(collectionTwo.title).should('not.be.visible');
    })
  });
})

// Prevent TypeScript from reading file as legacy script
export {}
