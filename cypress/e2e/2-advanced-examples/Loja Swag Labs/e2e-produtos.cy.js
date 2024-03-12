///<reference types="cypress" />


describe('Funcionalidade da pág de produtos', () => {

    it('Deve selecionar um produto da pág', () => {

        cy.visit('https://www.saucedemo.com/v1/inventory.html')

        cy.get('#item_4_title_link > .inventory_item_name').click()

        cy.wrap('tester').should('contain', 'test')
    });





    it('Deve me levar para o carrinho de compra, para realizar a compra', () => {
        
        cy.visit('https://www.saucedemo.com/v1/inventory-item.html?id=4')

        cy.get('.btn_primary').click()

        cy.get('.fa-layers-counter').click()

    });





it('Deve realizar o cadastro para compra ', () => {


    cy.visit('https://www.saucedemo.com/v1/inventory-item.html?id=4')

    cy.get('.btn_primary').click()

    cy.get('.fa-layers-counter').click()

    cy.get('.btn_action').click() 

    cy.get('[data-test="firstName"]').type('heitor')
    cy.get('[data-test="lastName"]').type('oliveira')
    cy.get('[data-test="postalCode"]').type('093093-000')
    cy.get('.btn_primary').click()

    cy.get('.btn_action').click() 

    cy.get('.complete-header').should('contain','THANK YOU FOR YOUR ORDER')
    
});






    });
    

