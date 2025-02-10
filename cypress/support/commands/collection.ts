import { IRawCollection } from '../../../src/interfaces/collection'

export function addCollection(collection: IRawCollection) {
    cy.get('button').contains('Adicionar coleção').click();

    cy.wait(1000);

    cy.get('input[placeholder="Título da coleção"]').type(collection.title);
    cy.get('input[placeholder="Subtítulo da coleção"]').type(collection.subtitle);
    cy.get('input[placeholder="Link para imagem de capa"]').type(collection.image);
    cy.get('input[placeholder="Autor da coleção"]').type(collection.author);
    cy.get('button').contains('Salvar').click();
}