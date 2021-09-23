/// <reference types="cypress" />

export class ProductPage{

    validateTitle(product){
        const label  = cy.get('h1').contains(product)
        label.should("have.text", product)
    }

    validateDescription(description){
        const label = cy.get('.short-description')
        label.should('have.text', description)
    }
    validatePrice(price){
        const label  = cy.get('*[id^="price-value-"]')
        label.should("have.text", " " +price + " ")

    }


} 