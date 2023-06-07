import { faker } from '@faker-js/faker';
import {collection} from '../../__tests__/factory/collection'

/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe('e2e/collection', () => {
  describe('Deve carregar a página de coleções corretamente', () => {
    it('Deve exibir o botão de adicionar coleção quando ela for carregada', () => {
      cy.visit('http://localhost:8080');

      cy.get('button').contains('Adicionar coleção').should('be.visible');
    });
  });

  describe('Deve exibir corretamente o modal de cadastrar coleção', () => {
    it('Deve exibir a coleção que foi adicionada pelo usuário através do modal de adicionar coleção', () => {
      // Utilize a factory de coleção para gerar os dados de uma nova coleção
      // Utilize o faker para gerar uma url de imagem valida
      // Acesse a URL da aplicação
      // Faça o modal de criar coleção aparecer na tela

      cy.get('input[placeholder="Título da coleção"]').type('TROQUE-PELOS-DADOS-DA-FACTORY');
      // Complete com os dados dos outros campos
      // Não esqueça de clicar no botão com o texto de salvar

      cy.get('footer').contains('Rodapé').scrollIntoView();
      // Talvez seja interessante procurar na documentação do cypress uma maneira de ESPERAR algum tempo
      // até que a tela realmente termine a requisição

      // Aqui você deve fazer o assert, o h3 deve estar visível com o texto da nova coleção
    });
  });

  describe('Deve filtrar as coleções corretamente', () => {
    it('Deve exibir a coleção cujo título foi digitado no campo de buscar', async() => {
      cy.visit('http://localhost:8080');

      cy.get('h3').first().then((element) => {
        const firstCollectionTitle = element[0].innerText;

        cy.get('[aria-label="search-icon"]').click();
        cy.get('input[name="search-input"').type(firstCollectionTitle);

        cy.get('h3').contains(firstCollectionTitle).should('be.visible');
      });
    });
  });
})

// Prevent TypeScript from reading file as legacy script
export {}
