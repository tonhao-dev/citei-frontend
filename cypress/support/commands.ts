/// <reference types="cypress" />
// ***********************************************

import { addCollection } from "./commands/collection";

Cypress.Commands.add('addCollection', addCollection)

export { addCollection } from './commands/collection'
