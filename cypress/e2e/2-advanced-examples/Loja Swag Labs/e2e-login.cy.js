///<reference types="cypress" />


describe('Funcionalidade: login', () => {

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/v1/')
    });


    it('Deve exibir uma mensagem de erro ao inserir o usuario invalido', () => {

        cy.get('[data-test="username"]').type('Fernando15#')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('#login-button').click()

        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')

    })



    it.only('Deve exibir uma mensagem de erro ao inserir a senha invalida', () => {

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('1234567')
        cy.get('#login-button').click()

        cy.get('[data-test="error"]').should('contain', 'Epic sadface: Username and password do not match any user in this service')



    });






})