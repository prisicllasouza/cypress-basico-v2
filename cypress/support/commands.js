Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
    cy.get('#firstName').type('Priscilla')
    cy.get('#lastName').type('Souza')
    cy.get('#email').type('p.souza7@gmail.com')
    cy.get('#open-text-area').type('Test')
    cy.get('button[type="submit"]').click()

})
