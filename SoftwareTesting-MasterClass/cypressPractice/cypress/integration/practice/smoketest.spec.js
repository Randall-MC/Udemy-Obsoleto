/// <reference types="cypress" />

beforeEach(()=> {

    cy.fixture('datos_prueba.json').then(function(datos) {
        this.datos_prueba = datos
        cy.visit(this.datos_prueba.url)
    })

})

describe('Pruebas página de inicio', function() {

    it('Validación encabezado superior', function() {
        
        cy.get('.active > img').should('be.visible')
        cy.get('.active > .custom > h4').contains('Online Banking')
        
    })

    it('Validación de cuatro columnas', function() {
        
        cy.get('#online_banking_features > :nth-child(1)').should('be.visible')
        cy.get('#online_banking_features > :nth-child(1) > h4').contains('Online Banking')
        cy.get('#online_banking_features > :nth-child(2)').should('be.visible')
        cy.get('#account_activity_link').contains('Checking Account Activity')
        cy.get('#online_banking_features > :nth-child(3)').should('be.visible')
        cy.get('#transfer_funds_link').contains('Transfer Funds')
        cy.get('#online_banking_features > :nth-child(4)').should('be.visible')
        cy.get('#money_map_link').contains('My Money Map')
        
    })

    it('Validación footer', function() {
        
        cy.get('#download_webinspect_link').contains('Download WebInspect')
        cy.get('.disclaimer').should('be.visible')
        
    })

})

describe('E2E Transferencias de fondos', function() {

    it('Fondos de ahorro a tarjeta de crédito', function() {

        cy.get('#signin_button').click()
        cy.get('#user_login').type(this.datos_prueba.username)
        cy.get('#user_password').type(this.datos_prueba.password)
        cy.get('.btn').click()
        cy.get('#transfer_funds_tab > a').click()
        cy.get('#tf_fromAccountId').select(2)
        cy.get('#tf_toAccountId').select(4)
        cy.get('#tf_amount').type('300')
        cy.get('#tf_description').type('Learning Cypress is funny')
        cy.get('#btn_submit').click()
        cy.get('#btn_submit').click()
        cy.get('.alert').should('contain.text', 'You successfully submitted your transaction')
        cy.get('.board-content').should('be.visible')
        cy.get('.offset2 > a').click()

    })

})
